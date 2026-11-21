---
label: REPO_SCOPE
standing: user
author: agent
force: must
why:
  - ../design.kb/goals.kb/legible-growth.md
authority:
  address: 3443f841
  words: >-
    As a policy: set no-publish by default; prefix @repo/ to non-publishing
    packages.
---

# Packages are unpublished by default, and an unpublished package is `@repo/`

Every workspace package is `"private": true` unless it is meant for a registry.
A private package's name starts with `@repo/`, so every import says where the
package comes from, and no name is one a public npm package could also hold.
`bin/new-package` stamps both.

`@repo/` is Turborepo's convention for unpublished internal packages. Declined:
`@bukzor/`, a scope worth taking only for publishing, and which reads as a
publisher's name. A package that is published takes a scope its publisher owns.
