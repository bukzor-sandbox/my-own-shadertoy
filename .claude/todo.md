# Todo

- [ ] Recall what 4a3d8ad and c32ceab taught.
  - [ ] Why an uncaptured GPU error never reaches `window`'s `error` handler
        unless something rethrows it (evidence:
        `packages/gpu/device/src/index.ts:init`)
  - [ ] Why a throw inside a `void`-discarded `device.lost.then(...)` gave
        callers no way to catch it, and how returning `lost` fixes that
        (evidence: `packages/gpu/device/src/index.ts:init`)
  - [ ] What `preventDefault()` on an `uncapturederror` event cancels, and what
        it leaves alone (evidence: `packages/gpu/device/src/index.ts:init`)
  - [ ] Why the page's stack line numbers differ from the devtools console's
- [ ] Suggestion (Claude's, after 0.1 landed): skim webgpufundamentals.org's
      table of contents once, against the milestone ladder (`TUTORIAL_READING`).
- [ ] Milestone 0.2, bukzor's (roadmap:
      `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`)
- [ ] Decide how WGSL sources are typed and loaded, before milestone 1.1.
- [ ] Explain or dismiss the 6s-to-55s spread in `lib/ci/check` run times. Lead:
      pre-commit runs the oxfmt hook in batches (8 on 2026-11-21), each through
      `bin/pnpm-run`'s `pnpm install`.

## Later

- [ ] A browser-side test runner, if the app wants one; `node --test` serves
      only the selftest today.
