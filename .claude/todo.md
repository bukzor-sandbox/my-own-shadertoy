# Todo

- [ ] Recall (missed cold on 2026-11-21): what `preventDefault()` on an
      `uncapturederror` event cancels, how that differs from
      `stopPropagation()`, and whether other listeners still run and the
      rethrown error still reaches the console (evidence:
      `packages/gpu/device/src/index.ts:requestDevice`)
- [x] Suggestion (Claude's, after 0.1 landed): skim webgpufundamentals.org's
      table of contents once, against the milestone ladder (`TUTORIAL_READING`).
- [ ] A root `README.md`, for a visitor arriving cold (`LEGIBLE_GROWTH`).
- [ ] Milestone 0.2, bukzor's (roadmap:
      `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`)
- [ ] Explain or dismiss the 6s-to-55s spread in `lib/ci/check` run times. Lead:
      pre-commit runs the oxfmt hook in batches (8 on 2026-11-21), each through
      `bin/pnpm-run`'s `pnpm install`.

## Later

- [ ] A browser-side test runner, if the app wants one; `node --test` serves
      only the selftest today.
