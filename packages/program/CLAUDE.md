# packages/program -- kept; bukzor writes

The program model: plain data describing passes, and the pure computations over
it (validation, uniform layout, the dry-run interpreter). It survives the
host-language swap.

- No WebGPU types, and no dependency on any other workspace group.
- Every program round-trips through JSON.
- Claude writes here only what bukzor directly asks for, and declines when the
  request is the learning (root `CLAUDE.md`, "Who writes what").
- New package: `bin/new-package program/<thing> '<its one job>'`.
