# Before starting the first task of a session

- If the last session ended red, finishing its increment comes first
  ([GREEN_INCREMENT]).
- Find the latest recall items with
  `git log -n1 --grep='^Recall:' --format='%h %s%n%(trailers:key=Recall,valueonly)'`,
  and ask bukzor to write each from memory before opening the editor ([RECALL]).
- If three or four feature sessions have passed since the last consolidation
  session (`git log` shows them), propose one ([CONSOLIDATION]).

[GREEN_INCREMENT]:
  ../../../docs/dev/claims.kb/design.kb/requirements.kb/green-commit-per-increment.md
[RECALL]:
  ../../../docs/dev/claims.kb/design.kb/requirements.kb/recall-from-memory.md
[CONSOLIDATION]:
  ../../../docs/dev/claims.kb/technical-policy.kb/consolidation-sessions.md
