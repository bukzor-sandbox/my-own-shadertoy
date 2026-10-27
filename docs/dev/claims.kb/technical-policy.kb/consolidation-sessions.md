---
label: CONSOLIDATION
standing: agent
force: should
why:
  - ../design.kb/goals.kb/legible-growth.md
  - ../design.kb/requirements.kb/one-job-each.md
---

# Every three or four feature sessions, one consolidation session

After every three or four feature sessions comes one session that adds no
feature and returns the codebase and its docs to legible. Sprawl comes from
never doing this, not from any one session.

The session:

- reads everything that changed since the last one;
- merges code that now has three copies (`THIRD_USE`);
- deletes or merges packages whose job statement no longer holds;
- brings this ledger and the `CLAUDE.md` files back to what is true;
- runs the breadcrumb witness (`BREADCRUMBS`).
