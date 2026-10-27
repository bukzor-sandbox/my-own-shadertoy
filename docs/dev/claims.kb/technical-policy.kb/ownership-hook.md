---
label: OWNERSHIP_HOOK
standing: user
verdict: rejected
force: must
why:
  - ../design.kb/goals.kb/learning-ownership.md
authority:
  address: fb592418
  words:
    I don't think I want it to be so mechanical. Plus maintaining the thing
    seems like a headache.
---

# A PreToolUse hook denies Claude's edits in kept groups

Proposed: a Claude Code hook that reads each group's owner and denies Edit and
Write there. Rejected on two grounds. It blocks the legitimate case, help with
tedious bits of no learning value, that only judgment can tell apart. And it is
one more thing to maintain. `CLAUDE_RELUCTANT` replaced it.
