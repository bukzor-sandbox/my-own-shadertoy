---
label: RECALL
standing: user
author: agent
why:
  - ../goals.kb/learning-ownership.md
---

# What a session taught can be written cold at the next

Each thing a session taught that bukzor should be able to write from memory
becomes an unchecked recall item in `.claude/todo.md`: as many as it earned, and
none for a session that taught nothing new. The next session starts with bukzor
trying each open item before opening the editor; an item written cold is checked
off, and a miss stays open for the session after. A miss is the signal that
Claude did too much, or that the increment was too large.

`todo.md` is already where the next session looks, so recall and its completion
need no other record.

> [!@bukzor] 83f86b54
>
> Use todo.md to record both future recalls and their completion, as todo items.
