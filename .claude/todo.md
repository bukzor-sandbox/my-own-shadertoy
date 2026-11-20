# Todo

- [x] Recall what df8e6e6 taught
  - [x] Why `void main();` satisfies `no-floating-promises`: what the linter
        fears is lost without it
  - [x] Why a runtime `Symbol.iterator` check can't decide between
        `describeObject` and `describeSet`
  - [x] Where the order of `adapter.limits`' lines comes from, and why
        `adapter.features` has none
  - [x] Why `constructor.name` and `Symbol.toStringTag` agree on every WebGPU
        object
- [ ] Milestone 0.1, bukzor's (roadmap:
      `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`)
  - [ ] Request a device; list `device.limits` and `device.features` beside the
        adapter's. The comparison is the lesson: nobody says in advance what it
        shows.
  - [ ] Hand `device.lost` and `device.onuncapturederror` to `showError`. Its
        comment in `apps/bukzor-shadertoy/src/lib/errors.ts` says what
        `String()` makes of WebGPU's error objects.
  - [ ] Extract the WebGPU parts into `gpu/device-and-adapter` with
        `bin/new-package`. Kept code, so the extraction is bukzor's.
  - [ ] Mark 0.1 "Landed." on the ladder.
- [ ] Decide how WGSL sources are typed and loaded, before milestone 1.1.
- [ ] Explain or dismiss the 6s-to-55s spread in `lib/ci/check` run times.

## Later

- [ ] A browser-side test runner, if the app wants one; `node --test` serves
      only the selftest today.
