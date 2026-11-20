---
label: ONE_PACKAGE_PER_THING
standing: user
why:
  - ../requirements.kb/one-job-each.md
  - lifetime-groups.md
authority:
  address: fb592418
  words:
    One teeny-package per new thing sounds right, maybe? And I'd like to see
    packagizing even for components of apps/bukzor-shadertoy.
---

# Each new thing is its own small package, named for that one thing

Every new thing gets its own package at `packages/<group>/<thing>`, `<thing>` a
kebab-case name for that one thing, never for a phase or the group's whole
subject (`device`, not `init` or `webgpu`). The package name is `@repo/` and the
path with the slash as a dash (`@repo/gpu-device`), so one grep finds both. Its
README is the one-paragraph job statement.

`bin/new-package` stamps a package, and takes the job statement as an argument,
so no package exists without one. The declined alternative was extracting a
package only at its second consumer: it keeps the package count low, but leaves
the dependency graph implicit until late, and the graph is the main thing that
keeps many small sessions legible.
