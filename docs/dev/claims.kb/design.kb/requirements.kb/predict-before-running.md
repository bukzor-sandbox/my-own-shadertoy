---
label: PREDICTION
standing: user
author: agent
why:
  - ../mission.md
  - ../goals.kb/learning-ownership.md
  - ../goals.kb/bite-sized-increments.md
---

# What a session taught, bukzor can predict at the next

Each concept a session taught bukzor becomes one unchecked prediction item in
`.claude/todo.md`: a change to the code, and what it will do. For example: with
`storeOp: "discard"`, what does the canvas show? The next session starts with
bukzor predicting each open item before opening the editor, then making the
change and running it. An item is checked off once bukzor can explain the
result, whether or not the prediction held, or when bukzor closes it. A wrong
prediction is the signal that Claude did too much, or that the increment was too
large.

`todo.md` is already where the next session looks, so prediction items and their
completion need no other record.

> [!@bukzor] 83f86b54
>
> Use todo.md to record both future recalls and their completion, as todo items.
