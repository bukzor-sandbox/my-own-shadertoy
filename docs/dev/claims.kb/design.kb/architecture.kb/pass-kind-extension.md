---
label: PASS_KIND_EXTENSION
standing: user
todo: true
why:
  - ../goals.kb/api-coverage.md
  - ../goals.kb/legible-growth.md
---

# A new pass kind touches three places, and forgetting one fails

Adding a pass kind means: a member of the pass-kind union in program, a new
package in passes, and an arm in the runner's switch. The lint stance makes a
non-exhaustive switch an error, so a missed arm fails the check. Three places
beats a plugin registry until the mesh pass (milestone 7) shows whether it
hurts.
