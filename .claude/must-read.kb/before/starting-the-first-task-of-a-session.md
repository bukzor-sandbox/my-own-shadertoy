# Before starting the first task of a session

- If the last session ended red, finishing its increment comes first
  ([GREEN_INCREMENT]).
- Ask bukzor to predict each open prediction item in `.claude/todo.md` before
  opening the editor, then run it ([PREDICTION]).
- If three or four feature sessions have passed since the last consolidation
  session (`git log` shows them), propose one ([CONSOLIDATION]).

[GREEN_INCREMENT]:
  ../../../docs/dev/claims.kb/design.kb/requirements.kb/green-commit-per-increment.md
[PREDICTION]:
  ../../../docs/dev/claims.kb/design.kb/requirements.kb/predict-before-running.md
[CONSOLIDATION]:
  ../../../docs/dev/claims.kb/technical-policy.kb/consolidation-sessions.md
