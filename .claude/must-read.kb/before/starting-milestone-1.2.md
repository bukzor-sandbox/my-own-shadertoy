# Before starting milestone 1.2

From 1.2 on, WebGPU calls belong only in `packages/gpu/` and `packages/passes/`,
and the app's pages (the gpu-info demos, the canvas page's clear) already make
them from `apps/`. So [WEBGPU_CALL_LINT]'s tripwire trips here: propose to
bukzor the lint rule that keeps WebGPU calls in those two groups, and whether
those calls move into a package or take the rule's exemption.

[WEBGPU_CALL_LINT]:
  ../../../docs/dev/claims.kb/design.kb/deliverables.kb/webgpu-call-lint.md
