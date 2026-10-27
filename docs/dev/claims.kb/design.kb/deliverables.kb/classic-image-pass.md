---
label: CLASSIC_IMAGE_PASS
standing: user
todo: true
why:
  - ../architecture.kb/pass-kind-extension.md
authority:
  address: fb592418
  words: a tripwire sounds good
---

# A fragment-shader image pass lands when bukzor first wants one

Tripwire: the first time bukzor wants to paste a classic Shadertoy `mainImage`
shader. Then an image pass kind lands: a fragment shader over a fullscreen
triangle, with a prelude supplying Shadertoy's uniform names. One more pass
kind, per `PASS_KIND_EXTENSION`.
