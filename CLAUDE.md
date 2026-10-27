--- # workaround: anthropics/claude-code#13003
git-caution: personal
---

# my-own-shadertoy

A pnpm workspace (TypeScript 7, WebGL), laid out like
`~/repo/github.com/bukzor/template.python-project`.

- `apps/*` -- deployable things
- `packages/*` -- libraries the apps share
- Each workspace defines its own `typecheck` script (`tsc`, extending
  `tsconfig.base.json`); the root runs them all.

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
- `pnpm typecheck` -- every workspace's `typecheck`

Pre-commit runs oxlint --fix, oxfmt, and typecheck, plus file-hygiene hooks.
Tool invocations go through `bin/pnpm-run`, which runs `pnpm install` first so
hooks never see stale dependencies.

## Toolchain

TypeScript 7 (native) has no JS API until 7.1, so typescript-eslint cannot run
on it (typescript-eslint/typescript-eslint#10940). Lint is therefore oxlint,
whose type-aware rules (`oxlint-tsgolint`) run on typescript-go; formatting and
import sorting are oxfmt. There is no ESLint or Prettier here.

Known gap: oxlint reports unused imports (`no-unused-vars`) but does not
auto-remove them.

## Lint stance

- Type-aware rules (`typescript/*`) are on, notably no-floating-promises and the
  no-unsafe-\* family.
- No `@ts-ignore` / `@ts-nocheck`; `@ts-expect-error` needs a description. A
  disable directive that stops firing is itself an error.
- No TODO/FIXME comments: an obligation goes in a failing check.
- A `switch` over a union lists every member; a new member must fail loudly.
- Import cycles are errors (dependencies stay a DAG).
- Functions over ~40 lines warn.
