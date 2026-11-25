# Todo

- [x] Recall (missed cold on 2026-11-21): what `preventDefault()` on an
      `uncapturederror` event cancels, how that differs from
      `stopPropagation()`, and whether other listeners still run and the
      rethrown error still reaches the console (evidence:
      `packages/gpu/device/src/index.ts:requestDevice`). Closed 2026-11-23 by
      bukzor, not cold.
- [x] Suggestion (Claude's, after 0.1 landed): skim webgpufundamentals.org's
      table of contents once, against the milestone ladder (`TUTORIAL_READING`).
- [x] Recall (0.2): clear a canvas: this frame's texture, a command encoder, a
      render pass whose one color attachment clears and stores, then end,
      finish, submit; and what each of `loadOp` and `storeOp` decides (evidence:
      `apps/bukzor-shadertoy/src/pages/canvas/main.ts:main`). Closed 2026-11-23
      by bukzor, not cold.
- [x] Recall (0.2): configure a canvas context with only what has no default,
      and why its texture is fetched after `configure()` and again each frame
      (evidence: `packages/gpu/canvas-surface/src/index.ts:getCanvasContext`).
      Closed 2026-11-23 by bukzor, not cold.
- [ ] Suggestion (Claude's, after 0.2 landed): read webgpufundamentals.org's
      "WebGPU Fundamentals" lesson against 0.2's code (`TUTORIAL_READING`).
- [ ] bukzor's call: should `WEBGPU_TYPES_PACKAGE` name a second gap in the DOM
      lib, the `getContext("webgpu")` overload? Without `@webgpu/types` it
      returns `RenderingContext` and `configure` fails TS2339.
- [ ] Fill `docs/dev/claims.kb/dev-process-design.kb/`, rung by rung, bukzor
      ruling each. One success criterion, not the most important: `design.kb`
      shrinks as process claims move out (baseline 2026-11-22: 4,315 words in 44
      files, by
      `find docs/dev/claims.kb/design.kb -name '*.md' | xargs cat | wc -w`).
- [ ] bukzor's call: which milestone first uses atomics? `API_COVERAGE` named
      them until the commit "Goals: each stance at its own level of abstraction"
      trimmed its feature list, and no milestone in `milestone-ladder.kb/`
      mentions them.
- [ ] A root `README.md`, for a visitor arriving cold (`LEGIBLE_GROWTH`).
- [ ] Milestone 0.3, bukzor's (roadmap:
      `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`)
- [ ] Explain or dismiss the 6s-to-55s spread in `lib/ci/check` run times. Lead:
      pre-commit runs the oxfmt hook in batches (8 on 2026-11-21), each through
      `bin/pnpm-run`'s `pnpm install`.

## Later

- [ ] A browser-side test runner, if the app wants one; `node --test` serves
      only the selftest today.
- [ ] Report upstream, if it isn't already known: after `canvas.width = 500` the
      browser kept showing, stretched, the last presented 300x150 frame, and
      `toDataURL()` returned that frame, though WebGPU §21.4.1 says a resize
      replaces the drawing buffer. Browser and version unrecorded.
