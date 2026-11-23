# design.kb -- where a new file goes

Conventions: [llm-design-kb] over [llm-claims-kb]. One claim per file, under the
rung whose question it answers; the rung's own `.md` defines it and its `.kb/`
holds its claims.

- A claim answering a rung's question goes in that rung's `.kb/`.
- A claim that would be revisited if another collapsed names that one in `why:`,
  whatever rung it sits on.
- A word this project stipulates goes in the `ontology:` of the outermost rung
  whose claims all need it.
- A cross-cutting imperative goes in `../technical-policy.kb/`.
- A claim about how the work gets done goes in `../dev-process-design.kb/`.
- A package's one job goes in its README, never here.
- A claim that binds an act to an occasion, a tripwire most often, also gets an
  entry in `.claude/must-read.kb/` named for that occasion. A tripwire's entry
  is deleted when its `todo:` is dropped.

[llm-design-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-design-kb/SKILL.md
[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
