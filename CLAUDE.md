--- # workaround: anthropics/claude-code#13003
git-caution: personal
---

# my-own-shadertoy

A pnpm workspace (TypeScript, WebGL), laid out like
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

- `pnpm fix` -- eslint --fix, then prettier --write
- `pnpm lint` -- eslint, no writes
- `pnpm typecheck` -- every workspace's `typecheck`

Pre-commit runs eslint --fix, prettier, and typecheck, plus file-hygiene hooks.
Tool invocations go through `bin/pnpm-run`, which runs `pnpm install` first so
hooks never see stale dependencies.

## TypeScript 7 beside 6

`tsc` is TypeScript 7 (package `typescript-7`). The `typescript` package is
aliased to `@typescript/typescript6` because typescript-eslint needs the TS 6
API; TS 7 ships no JS API until 7.1 (tracking:
typescript-eslint/typescript-eslint#10940, native backend in #12803). Once a
typescript-eslint release supports TS 7.1, drop the alias and the `typescript-7`
entry and use plain `typescript`.

## Lint stance

- No `@ts-ignore` / `@ts-nocheck`; `@ts-expect-error` needs a description. A
  disable directive that stops firing is itself an error.
- No TODO/FIXME comments: an obligation goes in a failing check.
- A `switch` over a union lists every member; a new member must fail loudly.
- Functions over ~40 lines warn.
