# Before starting milestone 1.2

From 1.2 on, WebGPU calls belong only in `packages/gpu/` and `packages/passes/`,
and the gpu-info page's demos already make them from `apps/`. So
[DEPENDENCY_DIRECTION]'s tripwire trips here: propose to bukzor the lint rule
that keeps WebGPU calls in those two groups, and whether the demos move into a
package or take the rule's exemption.

[DEPENDENCY_DIRECTION]:
  ../../../docs/dev/claims.kb/design.kb/architecture.kb/dependency-direction.md
