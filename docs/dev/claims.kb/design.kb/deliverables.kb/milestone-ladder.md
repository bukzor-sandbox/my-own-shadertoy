---
label: MILESTONE_LADDER
standing: user
todo: true
why:
  - ../goals.kb/api-coverage.md
  - ../goals.kb/bite-sized-increments.md
  - ../architecture.kb/one-package-per-thing.md
---

# The milestone ladder

Each line is a milestone: what lands, then the packages it introduces. Package
names are first guesses, corrected at each milestone. One list, in order,
because the ladder is linear; a milestone that turns out too large splits into
`N.M` sub-milestones in place. A milestone's line ends in "Landed." once its
commit is in; the first line without it is the next milestone.

- **0.0** `bin/new-package` stamps a package. Landed.
- **0.1** Adapter and device; log limits and features; handle device loss; show
  uncaptured errors on the page. No canvas. The page is `apps/toy`, served by
  Vite (the default; WebGPU needs a secure context, which localhost is).
  `gpu/device-and-adapter`
- **0.2** Canvas context; configure; clear via a render pass; resize.
  `gpu/canvas-surface`
- **0.3** `requestAnimationFrame` loop with pause and single-step.
  `gpu/frame-loop`
- **1.1** A compute pass writes a storage texture; a fullscreen-triangle pass
  blits it. Two pipelines, `layout: "auto"`, all hand-written in `apps/toy`.
  Deliberately unpackaged: 1.2 extracts from it.
- **1.2** Extract the program model and runner from 1.1. `program/pass-graph`,
  `gpu/runner`, `passes/compute-to-storage-texture`,
  `passes/blit-fullscreen-triangle`
- **1.3** The dry-run interpreter; first node tests.
  `program/dry-run-interpreter`
- **2.1** Uniform block for time, resolution, mouse: laid out by hand first,
  then computed. `program/uniform-layout`, `gpu/uniform-buffer`
- **2.2** Shader editor; recompile on edit; compilation messages in the UI.
  `gpu/compilation-info`, `ui/shader-editor`, `ui/compilation-messages`
- **3** Multiple passes, ping-pong, state across frames. Shared resources break
  `layout: "auto"`, so explicit bind group layouts land here, with the feature
  that needs them. `gpu/bind-group-layouts`, `passes/ping-pong`
- **4** Per-pass GPU profiler. `gpu/timestamp-queries`, `ui/profiler-panel`
- **5** Readback: save PNG, pixel under cursor. `gpu/readback`,
  `ui/pixel-probe`, `ui/save-png`
- **6** One pass writes the next pass's workgroup counts.
  `gpu/indirect-dispatch`
- **7** Mesh pass: built-in geometry drawn with user vertex and fragment
  shaders, instanced from a storage buffer another pass wrote; depth; indirect
  draw. `passes/mesh`, `gpu/depth-texture`, `gpu/builtin-geometry`

Declined: a separately scheduled bind-group-layout refactor after multipass. The
lesson arrives with the feature that forces it, so scheduling it apart is
planned debt.
