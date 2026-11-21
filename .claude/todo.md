# Todo

- [ ] Recall what 4a3d8ad and c32ceab taught.
  - [x] Why an uncaptured GPU error never reaches `window`'s `error` handler
        unless something rethrows it (evidence:
        `packages/gpu/device/src/index.ts:requestDevice`)
  - [x] Why a throw inside a `void`-discarded `device.lost.then(...)` gave
        callers no way to catch it, and how returning `lost` fixes that
        (evidence: `packages/gpu/device/src/index.ts:requestDevice`)
  - [ ] What `preventDefault()` on an `uncapturederror` event cancels, how that
        differs from `stopPropagation()`, and whether other listeners still run
        and the rethrown error still reaches the console (evidence:
        `packages/gpu/device/src/index.ts:requestDevice`)
  - [x] Why the page's stack line numbers differ from the devtools console's
- [ ] Suggestion (Claude's, after 0.1 landed): skim webgpufundamentals.org's
      table of contents once, against the milestone ladder (`TUTORIAL_READING`).
- [ ] Rule on what the second-opinion consolidation (2026-11-21) left open:
  - [ ] `BREADCRUMBS`: may an ancestor's `CLAUDE.md` be a collection's
        breadcrumb? `design.kb/`'s five sub-collections rely on that today.
  - [ ] The WGSL decision below is bound to "before milestone 1.1", but no
        trigger names it: `before/starting-milestone-1.1.md` serves only
        `WEBGPU_INSPECTOR`.
  - [ ] `ASK_BEFORE_EDITING_KEPT`'s decline branch ("a few sessions pass and the
        instruction alone holds") has no occasion; settle it at each
        consolidation?
  - [ ] A selftest case for `only-throw-error` and
        `prefer-promise-reject-errors`, which the lint stance asserts.
  - [ ] A root `README.md`, for a visitor arriving cold (`LEGIBLE_GROWTH`).
- [ ] Milestone 0.2, bukzor's (roadmap:
      `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`)
- [ ] Decide how WGSL sources are typed and loaded, before milestone 1.1.
- [ ] Explain or dismiss the 6s-to-55s spread in `lib/ci/check` run times. Lead:
      pre-commit runs the oxfmt hook in batches (8 on 2026-11-21), each through
      `bin/pnpm-run`'s `pnpm install`.

## Later

- [ ] A browser-side test runner, if the app wants one; `node --test` serves
      only the selftest today.
