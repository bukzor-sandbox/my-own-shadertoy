# apps -- throwaway; Claude may write after the first instance

Deployable wiring: an app composes packages into pages. Its own helpers may live
in `src/lib/`; one moves to a package when another workspace needs it, or when
it would outlive the swap.

- May depend on any package.
- Exception: milestone 1.1 is hand-written here, unpackaged, by bukzor;
  milestone 1.2 extracts it into packages.
- After bukzor's first instance, Claude may write freely here, except for first
  uses (root `CLAUDE.md`, "Who writes what").
