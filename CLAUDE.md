--- # workaround: anthropics/claude-code#13003
git-caution: personal
---

# my-own-shadertoy

A compute-first Shadertoy-alike, built so bukzor learns WebGPU and GPGPU
programming. A pnpm workspace (TypeScript 7, WebGPU), laid out like
`~/repo/github.com/bukzor/template.python-project`.

- `packages/<group>/<thing>` -- one small package per thing, grouped by
  lifetime. Each group's `CLAUDE.md` says who writes there.
  - kept: `program/` (the program as data), `gpu/` (WebGPU glue and runner),
    `passes/` (one package per pass kind)
  - throwaway: `ui/` (editor, panels)
- `apps/*` -- throwaway wiring that composes packages into a page
- `bin/new-package GROUP/THING 'its one job'` stamps a package; the job
  statement becomes its README.
- Each workspace has a `tsconfig.json` extending `tsconfig.base.json`; the root
  `typecheck` runs `tsc` in every workspace, and one without a tsconfig fails
  it.

## Who writes what

This is a learning project, so the learning-bearing work is bukzor's.

- In kept groups, write code only when bukzor directly asks, and only what was
  asked. Decline, saying why, when the request is the learning: a first use of a
  WebGPU API or WGSL feature, or a design bukzor is meant to work out. Instead
  explain, review, test bukzor's hypothesis without fixing, or put a worked
  example in `trash/` when asked for one.
- In throwaway groups, write freely once bukzor has written the first instance
  of that kind of part.

## Design docs

`docs/dev/claims.kb/` is the design, kept as a claim ledger: mission, goals,
requirements, architecture, deliverables (the milestone ladder), and technical
policy. Start at `docs/dev/claims.kb/design.md`. The roadmap is
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`. Reading it
needs nothing installed; maintaining it follows [llm-design-kb] and
[llm-claims-kb].

## Setup

```bash
pnpm install
pre-commit install
pre-commit run --all-files
```

## Commands

At the root these cover the repo; in a package, `fix`, `lint`, `format`, and
`typecheck` cover that package alone (`bin/new-package` stamps them).

- `pnpm fix` -- oxlint --fix, then oxfmt
- `pnpm lint` -- oxlint, no writes
- `pnpm format` -- oxfmt (formatting and import sorting)
- `pnpm typecheck` -- every workspace's `typecheck`, plus the selftest's
- `pnpm selftest` -- `lib/engprod-selftest`: the toolchain's own regression
  suite. Each `testdata/<case>/` is a small project plus an `expect.json` naming
  what lint, format, and typecheck must do with it. `testdata/` is excluded from
  every tool and hook.

Pre-commit runs oxlint --fix, oxfmt, and typecheck, plus file-hygiene hooks; the
selftest runs only when it or the tool config changes. Tool invocations go
through `bin/pnpm-run`, which runs `pnpm install` first so hooks never see stale
dependencies.

## CI

`lib/ci/check` is the whole of CI: pre-commit over every file. Run it at a
terminal for CI's verdict. The workflow in `.github/workflows/` only sets up the
environment (versions from `package.json`, `.envrc` via direnv) and then calls
it. Since no lockfile is committed, a green CI run also proves a fresh clone
resolves to a working toolchain.

## Toolchain

TypeScript 7 (native) has no JS API until 7.1, so typescript-eslint cannot run
on it (typescript-eslint/typescript-eslint#10940). Lint is therefore oxlint,
whose type-aware rules (`oxlint-tsgolint`) run on typescript-go; formatting and
import sorting are oxfmt. There is no ESLint or Prettier here.

Known gap: oxlint reports unused imports (`no-unused-vars`) but does not
auto-remove them.

## Lint stance

- No rule is advisory: every enabled rule is an error, so nothing scrolls by.
- Type-aware rules (`typescript/*`) are on, notably no-floating-promises and the
  no-unsafe-\* family.
- No `@ts-ignore` / `@ts-nocheck`; `@ts-expect-error` needs a description. A
  disable directive that stops firing is itself an error.
- No TODO/FIXME comments: an obligation goes in a failing check.
- A `switch` over a union lists every member; a new member must fail loudly.
- Import cycles are errors (dependencies stay a DAG).
- Functions over 40 lines fail; `console` use fails.

[llm-design-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-design-kb/SKILL.md
[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
