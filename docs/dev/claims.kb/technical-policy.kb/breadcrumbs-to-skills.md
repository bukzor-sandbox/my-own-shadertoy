---
label: BREADCRUMBS
standing: user
force: must
why:
  - ../design.kb/goals.kb/legible-growth.md
authority:
  address: fb592418
  words: i like it
  about: the breadcrumbing proposal
---

# Every convention-governed directory names the skill that governs it

Each `.kb` collection links the `SKILL.md` that governs it, and the root
`CLAUDE.md` lists the collections. Reading this repo's docs needs nothing
installed; maintaining them needs bukzor's agent skills, so the breadcrumbs
serve maintainers.

- the root `CLAUDE.md` lists each `.kb` collection and links the skills;
- each `.kb` collection's top file or `CLAUDE.md` links its governing `SKILL.md`
  by full URL, to the skill file itself, never the skills repo's root.

The witness: a fresh agent in a clean clone, with no skills installed, asked
where the roadmap is and how the design docs are organized, answers correctly.
Run once now and at each consolidation.
