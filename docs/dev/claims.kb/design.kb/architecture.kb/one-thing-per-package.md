---
label: ONE_THING_PER_PACKAGE
standing: user
why:
  - ../requirements.kb/one-job-each.md
  - lifetime-groups.md
  - ../requirements.kb/names-show-structure.md
authority:
  address: fb592418
  words:
    One teeny-package per new thing sounds right, maybe? And I'd like to see
    packagizing even for components of apps/bukzor-shadertoy.
---

# A package boundary is drawn where it does work, around one named thing

A new thing in `packages/` gets its own package rather than widening another's
job. Elsewhere a thing becomes a package when it must outlive the swap, when
another workspace imports it, or when its dependencies should be narrower than
its host's, since a package is the only grain at which pnpm enforces imports.
Any other thing may still be one.

A package lives at `packages/<group>/<thing>`, `<thing>` a kebab-case name for
that one thing, never for a phase or the group's whole subject (`device`, not
`init` or `webgpu`). The package name is `@repo/` and the path with the slash as
a dash (`@repo/gpu-device`), so one grep finds both. Its README is the
one-paragraph job statement.

`bin/new-package` stamps a package, and takes the job statement as an argument,
so no package exists without one. The declined alternative was extracting a
package only at its second consumer: it keeps the package count low, but leaves
the dependency graph implicit until late, and the graph is the main thing that
keeps many small sessions legible.

> [!@bukzor] d02f4153 -- the quoted ruling answered a proposal that only reused
> components get packages: an app's components may be packages, not must.
> Accepted 2026-11-21: the conditions above.
