---
label: POLICY
standing: user
author: agent
why:
  - design.kb/goals.md
  - dev-process-design.md
non-claim-tokens:
  - API
  - CLAUDE
  - MDN
  - RFC
  - SKILL
  - TBD
  - URL
  - WGSL
---

# my-own-shadertoy -- technical policy

Cross-cutting rules binding work across the whole project, most of them on how
Claude and bukzor divide the work. Each ruled claim carries `force:` (`must` /
`should` / `may`, RFC 2119) and a `why:` naming the design or dev-process claim
it serves. The operative text an agent loads is in the `CLAUDE.md` files and the
trigger bank, `.claude/must-read.kb/`; these files hold the standing and the
reasons. Conventions: [llm-claims-kb].

[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
