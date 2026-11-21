---
label: MILESTONE_3
standing: user
author: agent
todo: true
why:
  - ../milestone-ladder.md
---

# 3: passes chain, ping-pong, and keep state across frames

Multiple passes, ping-pong, state across frames. Shared resources break
`layout: "auto"`, so explicit bind group layouts land here, with the feature
that needs them.

Packages: `gpu/bind-group-layouts`, `passes/ping-pong`.
