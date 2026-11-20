---
label: RECALL
standing: user
author: agent
why:
  - ../goals.kb/learning-ownership.md
---

# What a session taught can be written cold at the next

A session's increment commit carries one `Recall:` trailer per thing the session
taught that bukzor should be able to write from memory: as many as it earned,
and none for a session that taught nothing new. The next session finds the
latest such commit in `git log` and starts with bukzor trying each item before
opening the editor. A miss is the signal that Claude did too much, or that the
increment was too large.

The commit message keeps the items beside the work that taught them, and a cold
start finds them with no other file to keep current.

> [!@bukzor] 1b724c86
>
> The commit message seems a good spot for it: suggest a convention for writing
> it, and that new sessions look there. "Three" seems badly overspecified;
> loosen it.
