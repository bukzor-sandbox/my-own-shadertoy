---
label: DESIGN
standing: agent
ontology:
  - mission
  - goals
  - requirements
  - architecture
  - deliverables
non-claim-tokens:
  - DAG
  - GPGPU
  - WGSL
stale-when:
  a rung nothing cites and nothing fills, or package-level claims start
  accreting with no rung to hold them (the dropped components rung wants
  restoring)
---

# my-own-shadertoy -- the design, as a ledger

What this project is for and how it is built, kept as a claim ledger
([llm-claims-kb]): one claim per file, label and standing in frontmatter, one
theory per collection. Argue with a claim by editing its file; the git diff is
the strikethrough. The rungs follow [llm-design-kb].

| Rung           | The question it answers                    |
| -------------- | ------------------------------------------ |
| `mission`      | What problem are we solving? Who benefits? |
| `goals`        | How do we accomplish the mission?          |
| `requirements` | How do we validate the goals are achieved? |
| `architecture` | How do we satisfy the requirements?        |
| `deliverables` | How do we build it, in what order?         |

The default `components` rung is dropped: each package's README states its one
job, and the milestone ladder names which package lands when, so a components
rung would only copy them. Cross-cutting imperatives, including who writes which
code, are in `technical-policy.md`.

Priors are a DAG, not a ladder: a claim's `why:` names whatever claims it would
be revisited over.

## Scans

```bash
grep -rH '^standing:' docs/dev/claims.kb/     # who signed what
grep -rl '^todo: true' docs/dev/claims.kb/    # decided, not yet built
grep -rl 'verdict:' docs/dev/claims.kb/       # out of force, kept so it is not re-proposed
llm-claims-kb-flatten docs/dev/claims.kb      # the whole ledger as one text
```

[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
[llm-design-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-design-kb/SKILL.md
