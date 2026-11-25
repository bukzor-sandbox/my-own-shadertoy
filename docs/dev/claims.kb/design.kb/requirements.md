---
label: REQUIREMENTS
standing: user
author: agent
why:
  - goals.md
---

# Requirements

How the goals are checked: properties someone outside the implementation could
test, one per file in `requirements.kb/`. Each reaches a goal through `why:`,
directly or through another requirement. One that cites a requirement narrows
its check; one that says how a requirement is met is architecture.
