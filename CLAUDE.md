--- # workaround: anthropics/claude-code#13003
git-caution: personal
---

# my-own-shadertoy

A pnpm workspace (TypeScript 7, WebGL), laid out like
`~/repo/github.com/bukzor/template.python-project`.

- `apps/*` -- deployable things
- `packages/*` -- libraries the apps share
- Each workspace has a `tsconfig.json` extending `tsconfig.base.json`; the root
  `typecheck` runs `tsc` in every workspace, and one without a tsconfig fails
  it.

## Setup

```bash
pnpm install
pre-commit install
pre-commit run --all-files
```

## Commands

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
