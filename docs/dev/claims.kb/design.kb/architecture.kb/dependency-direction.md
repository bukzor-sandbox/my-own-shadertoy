---
label: DEPENDENCY_DIRECTION
standing: user
author: agent
why:
  - ../requirements.kb/swap-survives.md
  - lifetime-groups.md
---

# Dependencies point from throwaway to kept

`apps/` may depend on anything; `packages/ui/` on program, gpu, and passes;
passes on gpu and program; gpu on program; program on nothing in the workspace.
pnpm refuses an import a package has not declared, so the direction is enforced
by each `package.json`.
