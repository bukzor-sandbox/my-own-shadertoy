---
label: WEBGPU_CALL_LINT
standing: user
author: agent
todo: true
why:
  - ../architecture.kb/webgpu-call-sites.md
  - milestone-ladder.kb/01.2-program-model-and-runner.md
---

# A lint rule keeps WebGPU calls in their two groups, once one strays

Tripwire: the first WebGPU call found outside gpu and passes packages, from
milestone 1.2 on, adds a lint rule.

> [!DRAFT] cdc9b664: the app's pages already make such calls from `apps/` (the
> gpu-info demos, the canvas page's clear), so the tripwire trips when 1.2
> starts.
