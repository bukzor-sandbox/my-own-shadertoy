---
label: GREEN_INCREMENT
standing: agent
why:
  - ../goals.kb/bite-sized-increments.md
---

# Every increment ends green and committed

An increment is done when CI's verdict (`lib/ci/check`) passes and the work is
one commit, demonstrable by opening the page or running a test. A session that
ends red has not finished its increment, and the next session starts by
finishing it.
