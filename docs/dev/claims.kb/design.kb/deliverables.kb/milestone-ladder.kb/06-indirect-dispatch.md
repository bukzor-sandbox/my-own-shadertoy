---
label: MILESTONE_6
standing: user
author: agent
todo: true
why:
  - ../milestone-ladder.md
---

# 6: one pass sizes the next pass's dispatch

One pass writes the next pass's workgroup counts. Counting work found across
many threads needs atomics, so they land here, with the feature that needs them.

Packages: `gpu/indirect-dispatch`.
