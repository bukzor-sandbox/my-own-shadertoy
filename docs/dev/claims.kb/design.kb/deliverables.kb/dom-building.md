---
label: DOM_BUILDING
standing: user
author: agent
todo: true
why:
  - milestone-ladder.md
  - ../architecture.kb/lifetime-groups.md
---

# How pages build their markup is discussed before the markup grows

Tripwire: the first of these:

- the gpu-info page moves its listings to `<dl>` or `<ul>` and gains a
  stylesheet;
- milestone 2.2, which brings the first `ui/` packages, starts.

Then hold a separate discussion and record its ruling here. The page's `htmlTag`
helper is the "hyperscript" pattern, `h(tag, ...children)`. The candidates are
keeping it, VanJS (the same pattern, about 1 kB), lit-html (tagged templates),
and Preact with JSX (largest ecosystem, built into Vite).

> [!@bukzor] 1b724c86
>
> I probably want to visit this topic soon-ish. Probably wants a separate
> discussion.
