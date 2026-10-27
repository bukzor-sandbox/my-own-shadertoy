import { spawnSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const BIN = path.join(ROOT, "node_modules/.bin");
export const TESTDATA = path.join(import.meta.dirname, "testdata");
export const SCRATCH = path.join(ROOT, "trash/engprod-selftest");

/** The repo files that configure the tools under test, copied verbatim. */
const CONFIG_FILES = [
  ".oxlintrc.json",
  ".oxfmtrc.json",
  ".editorconfig",
  "tsconfig.base.json",
];

/** Files in a testdata case that describe it rather than being its input. */
const CASE_METADATA = ["expect.json", "fixed"];

/** Diagnostics per case, as `<severity> <code> <file>:<line>` sorted lines. */
export type DiagnosticsByCase = ReadonlyMap<string, readonly string[]>;

export function listCases(): string[] {
  return readdirSync(TESTDATA, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .toSorted();
}

/** Every file under `dir` (relative path -> contents), minus `skip` roots. */
export function readTree(
  dir: string,
  skip: readonly string[] = [],
): Map<string, string> {
  const tree = new Map<string, string>();
  for (const entry of readdirSync(dir, {
    recursive: true,
    withFileTypes: true,
  })) {
    const file = path.join(entry.parentPath, entry.name);
    const relative = path.relative(dir, file);
    const skipped = skip.some((root) => relative.split(path.sep)[0] === root);
    if (entry.isFile() && !skipped) {
      tree.set(relative, readFileSync(file, "utf8"));
    }
  }
  return tree;
}

export function readCaseInput(name: string): Map<string, string> {
  return readTree(path.join(TESTDATA, name), CASE_METADATA);
}

/**
 * A throwaway monorepo holding the repo's real tool configs and one package
 * per case. The empty `.git` makes it its own ignore root; otherwise oxlint
 * honors the parent repo's `.gitignore` (which lists `trash/`) and finds no
 * files.
 */
export function buildWorkspace(
  label: string,
  cases: readonly string[],
): string {
  const dir = path.join(SCRATCH, label);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(path.join(dir, ".git"), { recursive: true });
  for (const file of CONFIG_FILES) {
    cpSync(path.join(ROOT, file), path.join(dir, file));
  }
  for (const name of cases) {
    const pkg = path.join(dir, "packages", name);
    cpSync(path.join(TESTDATA, name), pkg, {
      recursive: true,
      filter: (source) =>
        !CASE_METADATA.includes(
          path.relative(path.join(TESTDATA, name), source),
        ),
    });
    writeFileSync(
      path.join(pkg, "package.json"),
      JSON.stringify({ name, private: true }),
    );
    writeFileSync(
      path.join(pkg, "tsconfig.json"),
      JSON.stringify({ extends: "../../tsconfig.base.json", include: ["src"] }),
    );
  }
  return dir;
}

function run(tool: string, args: readonly string[], cwd: string) {
  const result = spawnSync(path.join(BIN, tool), args, {
    cwd,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.error) {
    throw result.error;
  }
  return result;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * Parse `oxlint -f json` output; a crash or garbage is a harness error. Rows
 * are `[severity, code, file, line]`; a finding with no rule code (a stale
 * disable directive) is identified by its message instead.
 */
function parseOxlint(stdout: string, stderr: string): string[][] {
  const data: unknown = JSON.parse(stdout);
  if (!isRecord(data) || !Array.isArray(data["diagnostics"])) {
    throw new Error(`unexpected oxlint output:\n${stdout}\n${stderr}`);
  }
  return data["diagnostics"].map((diagnostic: unknown) => {
    if (!isRecord(diagnostic)) {
      throw new Error(`unexpected diagnostic: ${JSON.stringify(diagnostic)}`);
    }
    const labels = diagnostic["labels"];
    const first: unknown = Array.isArray(labels) ? labels[0] : undefined;
    const span = isRecord(first) ? first["span"] : undefined;
    const line = isRecord(span) ? span["line"] : undefined;
    return [
      String(diagnostic["severity"]),
      String(diagnostic["code"] ?? diagnostic["message"]),
      String(diagnostic["filename"]),
      String(line),
    ];
  });
}

/** Group `[..., file, line]` rows by the case package they came from. */
function groupByCase(rows: readonly string[][]): Map<string, string[]> {
  const grouped = new Map<string, string[]>();
  for (const [severity, code, filename, line] of rows) {
    const [, name, ...rest] = (filename ?? "").split("/");
    if (name === undefined) {
      continue;
    }
    const entry = `${severity ?? ""} ${code ?? ""} ${rest.join("/")}:${line ?? ""}`;
    grouped.set(name, [...(grouped.get(name) ?? []), entry].toSorted());
  }
  return grouped;
}

export function lint(workspace: string): DiagnosticsByCase {
  const { stdout, stderr } = run("oxlint", ["-f", "json", "."], workspace);
  return groupByCase(parseOxlint(stdout, stderr));
}

/** The same two steps pre-commit runs: autofix lint, then format. */
export function fix(workspace: string): void {
  run("oxlint", ["--fix", "."], workspace);
  const format = run("oxfmt", ["."], workspace);
  if (format.status !== 0) {
    throw new Error(`oxfmt failed:\n${format.stdout}\n${format.stderr}`);
  }
}

/** tsc errors for one case's package, as `<TScode> <file>:<line>` lines. */
export function typecheck(workspace: string, name: string): string[] {
  const cwd = path.join(workspace, "packages", name);
  const { stdout } = run("tsc", ["--noEmit", "--pretty", "false"], cwd);
  const errors = [...stdout.matchAll(/^(.+)\((\d+),\d+\): error (TS\d+):/gm)];
  return errors
    .map(([, file, line, code]) => `${code} ${file}:${line}`)
    .toSorted();
}
