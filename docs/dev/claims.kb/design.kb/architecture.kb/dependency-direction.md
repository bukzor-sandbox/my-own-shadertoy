---
label: DEPENDENCY_DIRECTION
standing: user
author: agent
todo: true
why:
  - ../requirements.kb/swap-survives.md
  - lifetime-groups.md
---

# Dependencies point from throwaway to kept, and WebGPU calls stay in two groups

`apps/` may depend on anything; `packages/ui/` on program, gpu, and passes;
passes on gpu and program; gpu on program; program on nothing in the workspace.
pnpm refuses an import a package has not declared, so the direction is enforced
by each `package.json`.

WebGPU calls appear only in gpu and passes packages. TypeScript 7's DOM lib
declares the WebGPU types, so every package can see them and no dependency
scoping can hide them; the group `CLAUDE.md` files and review hold this line.
Tripwire: the first WebGPU call found outside those groups adds a lint rule.
