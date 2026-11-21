# Sub-agent handoffs for promoting the milestone ladder

Each file here is one sub-agent's unit of work toward the parent plan,
`../2026-11-21-000-promote-milestone-ladder.md`. It carries both directions of
the handoff: the coordinator's brief, then the agent's own record and report.
Belongs here: work one agent can finish in one sitting (≤60 min), scoped to
named files. Does not belong: design (`docs/dev/claims.kb/`), or work spanning
waves (split it).

A handoff file holds only what has no other home: what the unit was asked, how
far it got, what it chose and still doubts. Design, interfaces and findings live
in their own homes, and a handoff file links to them, never copies them.

## Protocol

1. The coordinator writes the file before launch, named
   `YYYY-MM-DD-NNN-slug.md`: frontmatter `required-reading:` and `blocked-by:`;
   a **Problem Statement** (goal, scope as a file list, decisions already made
   for it). The launch prompt is only "do the task in PATH".
2. The agent works from the file and keeps it current: **Steps** as checkboxes,
   marked `[~]` on starting one and `[x]` on finishing it; **Decisions** with
   reasons; **Open Questions**. At the end, a **Final report**: check results,
   deviations from the brief, and where each result lives. `status:` stays
   `open` while it works; at the end it sets `status: done`, commits its unit,
   and replies with the path only.
3. While open, a later instruction is an in-place edit of the brief, and the
   message is just "reread PATH". Once done, the file is a frozen record.

## Every agent, every task

- Read first: `~/.claude/CLAUDE.md`, the repo's root `CLAUDE.md` (its
  trigger-bank listing too),
  `~/.claude/must-read.kb/before/editing-documentation.md`, then the brief's
  `required-reading:`.
- This is a learning project; these units touch only docs, never code in
  `packages/` or `apps/`.
- Never invent who typed something. Attribution (`by:`) is bukzor's to give;
  where it is unknown, leave the entry out and list it in your Final report.
- Stay inside the brief's file list. Never edit a sibling's files or the parent
  plan.
- Write each finding into its home, the doc your scope names. When there is
  none, the Final report is its home; name the gap in Open Questions.
- An interface you produce is documented where it is defined (schema
  `description:`s, the roll-up claim), not restated in your report.
- Stage your scope's paths as you finish each step (`git add PATHS`). Before
  handing back, commit them and your handoff file with
  `git commit-files PATHS -- -m MSG`, ending the message with
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Never commit bare;
  never stage, unstage or commit a path outside your scope. Do not push.
- Markdown is formatted by `oxfmt` (prose wraps at 80). Run
  `node_modules/.bin/oxfmt PATHS` on what you touched.
- Finish clean on: `llm.kb-validate docs/dev/claims.kb`,
  `~/.claude/skills/llm-kb/bin/llm.kb-validate-links docs/dev/claims.kb`, and
  `lib/ci/check` (it checks tracked files only: `git add` new files first).
- Run builds and checks in the foreground. Never end your turn waiting on a
  background job.
- Scratch goes in the repo's `trash/`.
- The brief (frontmatter inputs, Problem Statement) is the coordinator's; edit
  only your own sections, in place, ≤60 lines.
