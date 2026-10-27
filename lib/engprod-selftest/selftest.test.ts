import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { before, describe, it } from "node:test";

import {
  buildWorkspace,
  type DiagnosticsByCase,
  fix,
  isRecord,
  lint,
  listCases,
  readCaseInput,
  readTree,
  TESTDATA,
  typecheck,
} from "./workspace.ts";

/**
 * What one testdata case promises. Each assertion is optional; a case asserts
 * only what it lists.
 */
interface Expectation {
  why: string;
  /** `oxlint` findings on the input, as `<severity> <code> <file>:<line>`. */
  diagnostics?: string[];
  /** `oxlint` findings left after `oxlint --fix` then `oxfmt`. */
  remaining?: string[];
  /** `tsc` errors on the input, as `<TScode> <file>:<line>`. */
  tsc?: string[];
  /** After fix+format, every input file is byte-identical. */
  unchangedByFix?: boolean;
  /** After fix+format, each file under `fixed/` matches the result. */
  fixed?: boolean;
  /**
   * The assertions above are what we want but the toolchain does not do yet.
   * The case passes while at least one fails and fails once all hold, so a
   * toolchain improvement shows up as a prompt to delete this field.
   */
  knownGap?: string;
}

interface Observed {
  diagnostics: DiagnosticsByCase;
  remaining: DiagnosticsByCase;
  tsc: ReadonlyMap<string, readonly string[]>;
  fixedTrees: ReadonlyMap<string, ReadonlyMap<string, string>>;
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function isExpectation(value: unknown): value is Expectation {
  return (
    isRecord(value) &&
    typeof value["why"] === "string" &&
    ["diagnostics", "remaining", "tsc"].every(
      (key) => value[key] === undefined || isStringArray(value[key]),
    )
  );
}

function loadExpectation(name: string): Expectation {
  const file = path.join(TESTDATA, name, "expect.json");
  const raw: unknown = JSON.parse(readFileSync(file, "utf8"));
  if (!isExpectation(raw)) {
    throw new Error(
      `${file}: expected an object with a string "why", and ` +
        `diagnostics/remaining/tsc as arrays of strings`,
    );
  }
  return raw;
}

function observe(
  cases: readonly string[],
  expectations: Map<string, Expectation>,
) {
  const pristine = buildWorkspace("pristine", cases);
  const tsc = new Map<string, readonly string[]>();
  for (const name of cases) {
    if (expectations.get(name)?.tsc !== undefined) {
      tsc.set(name, typecheck(pristine, name));
    }
  }
  const fixedWorkspace = buildWorkspace("fixed", cases);
  fix(fixedWorkspace);
  const fixedTrees = new Map(
    cases.map((name) => [
      name,
      readTree(path.join(fixedWorkspace, "packages", name)),
    ]),
  );
  return {
    diagnostics: lint(pristine),
    remaining: lint(fixedWorkspace),
    tsc,
    fixedTrees,
  };
}

function assertFixed(name: string, expected: Expectation, seen: Observed) {
  const result = seen.fixedTrees.get(name) ?? new Map<string, string>();
  const input = readCaseInput(name);
  const golden = expected.fixed
    ? readTree(path.join(TESTDATA, name, "fixed"))
    : new Map<string, string>();
  const want = expected.unchangedByFix ? input : golden;
  for (const [file, contents] of want) {
    assert.equal(result.get(file), contents, `${file} after fix`);
  }
}

/** Run every assertion `expected` makes; throws on the first that fails. */
function assertExpectation(
  name: string,
  expected: Expectation,
  seen: Observed,
) {
  if (expected.diagnostics) {
    assert.deepEqual(seen.diagnostics.get(name) ?? [], expected.diagnostics);
  }
  if (expected.tsc) {
    assert.deepEqual(seen.tsc.get(name) ?? [], expected.tsc);
  }
  assertFixed(name, expected, seen);
  if (expected.remaining) {
    assert.deepEqual(seen.remaining.get(name) ?? [], expected.remaining);
  }
}

function assertKnownGap(name: string, expected: Expectation, seen: Observed) {
  try {
    assertExpectation(name, expected, seen);
  } catch {
    return;
  }
  assert.fail(
    `known gap closed (${expected.knownGap ?? ""}): remove "knownGap" from ` +
      `${name}/expect.json`,
  );
}

void describe("engprod selftest", () => {
  const cases = listCases();
  const expectations = new Map(
    cases.map((name) => [name, loadExpectation(name)]),
  );
  let seen: Observed;

  before(() => {
    seen = observe(cases, expectations);
  });

  for (const [name, expected] of expectations) {
    void it(name, () => {
      if (expected.knownGap === undefined) {
        assertExpectation(name, expected, seen);
      } else {
        assertKnownGap(name, expected, seen);
      }
    });
  }
});
