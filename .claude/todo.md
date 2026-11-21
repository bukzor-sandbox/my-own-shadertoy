# Todo

- [ ] Recall what 4a3d8ad and c32ceab taught. Offered: the answers can become
      the first `docs/webgpu.kb/` note, on how GPU errors escalate
      (`LEARNING_NOTES`).
  - [ ] Why an uncaptured GPU error never reaches `window`'s `error` handler
        unless something rethrows it
  - [ ] Why a throw inside a `void`-discarded `device.lost.then(...)` gave
        callers no way to catch it, and how returning `lost` fixes that
  - [ ] What `preventDefault()` on an `uncapturederror` event cancels, and what
        it leaves alone
  - [ ] Why the page's stack line numbers differ from the devtools console's
- [ ] Rule on `ERROR_HANDLING`, agent-signed in 4a3d8ad
      (`docs/dev/claims.kb/technical-policy.kb/error-handling.md`)
- [ ] Decide how `FIRST_INSTANCE` is checked, now that commit trailers are ruled
      out
      (`docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md`).
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
