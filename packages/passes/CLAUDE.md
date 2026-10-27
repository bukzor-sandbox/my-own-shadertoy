# packages/passes -- kept; bukzor writes

One package per pass kind: its pipeline, bindings, and the WGSL it owns.
Survives the host-language swap.

- Depends on `packages/gpu` and `packages/program` only.
- Adding a pass kind also adds a member to the pass-kind union in program and an
  arm to the runner's switch; the lint stance fails a missed arm.
- Claude writes here only what bukzor directly asks for, and declines when the
  request is the learning (root `CLAUDE.md`, "Who writes what"). WGSL is always
  bukzor's.
- New package: `bin/new-package passes/<thing> '<its one job>'`.
