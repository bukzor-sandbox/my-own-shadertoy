---
label: API_COVERAGE
standing: user
why:
  - ../mission.md
authority:
  address: fb592418
  words: Sweet. Sounds good.
  about:
    a compute-first Shadertoy, extended with timestamps, readback, indirect
    dispatch, and a mesh pass
---

# The toy grows to cover the WebGPU surface a practitioner uses

The toy is compute-first: passes are compute shaders writing storage textures
and buffers, blitted to the canvas. Each extension is a feature a
Shadertoy-alike should have, and together they exercise compute pipelines,
storage buffers, atomics, explicit bind group layouts, timestamp queries,
readback, indirect dispatch, and (through a mesh pass) vertex and index buffers,
instancing, depth, and indirect draws.

Out of scope: operating the API under load -- hundreds of buffers, GPU-driven
culling, asset streaming, CPU frame budgets. A Shadertoy-alike never exerts that
pressure; it is a second project.

> [!@bukzor] fb592418
>
> > make it a _compute_ Shadertoy...
>
> Yes, this.
