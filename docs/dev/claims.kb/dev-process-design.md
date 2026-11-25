---
label: DEV_PROCESS
standing: user
author: agent
why:
  - design.md
  - design.kb/mission.md
non-claim-tokens:
  - CLAUDE
  - DAG
  - SKILL
stale-when:
  a rung nothing cites and nothing fills, or a claim here that says what the toy
  is where it should say how the work on it gets done
ontology:
  - dev-process
  - dev process
  - development process
---

# the dev process of my-own-shadertoy

How the work on this repo gets done, kept as a second design ledger beside
`design.md`: sessions, milestones, who writes what, and the docs, triggers, and
todos that carry it all. `design.md` says what the toy is; this says how bukzor
and Claude work together to build it. The dev-process exists to serve the
mission in `design.kb/mission.md`, and everything here is a cost against it that
must repay itself, with interest.

> [!@bukzor] 4025060d -- of the dev-process overhead: what's needed is a
> claim-design ledger one level up, kept in this repo since large swaths of the
> process are specific to it; what applies beyond this repo is extracted later.

The rungs are governed by skill://llm-design-kb, each asked of the process.

| Rung           | The question it answers                        |
| -------------- | ---------------------------------------------- |
| `mission`      | What is the process for? What may it cost?     |
| `goals`        | How does the process accomplish that?          |
| `requirements` | How do we validate the goals are achieved?     |
| `architecture` | Which parts satisfy the requirements, and how? |

Conventions: [llm-design-kb] over [llm-claims-kb].

[llm-design-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-design-kb/SKILL.md
[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
