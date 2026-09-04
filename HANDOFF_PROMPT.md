# Kickoff prompt

Open a **new Claude Code session with `goldenstoneqld/goldenstoneqld.github.io`
as the initial source**, upload `golden-stone-handoff.zip`, then paste
everything below the line as the first message.

---

Redesign the Golden Stone QLD website. This is the flagship rebuild — treat it
as the piece of work the business gets judged on.

I have uploaded a handoff package. **Read all four documents before writing any
markup:**

1. `BRIEFING.md` — art direction, page-by-page structure, non-negotiables,
   definition of done. This is the spec.
2. `CONTENT_SOURCE.md` — every line of approved copy. Do not invent copy; if you
   need a line that isn't there, leave a TODO and tell me.
3. `ASSET_MANIFEST.md` — ten production photographs, their alt text, where each
   one goes, and the `<picture>` pattern to serve them with.
4. `assets/hero-animation/hero-animation.html` — open it in a browser first. It
   is the opening animation: a dimensioned benchtop plan that lifts into 3D and
   materialises as polished stone. Pure SVG + CSS, 10 s loop, ~5 KB.

Also read the repository's own `CLAUDE.md` — its working rules (branch, PR,
verify-before-acting, never overwrite user-uploaded images, Australian English)
apply and take precedence on repository conventions.

Three decisions are already settled. They are not open questions:

- **The brand stays Golden Stone gold, black and cream.** No teal, no second
  accent hue. What carries over from the IFL product is rigour — the animation
  retinted to gold, monospace for millimetre figures and step numbers, strict
  token discipline, the vocabulary of a controlled process.
- **Contact details come from the live site, not from the capability statement
  .docx** — phone 0459 604 470, sales@goldenstoneqld.com.au, office 37 Donna
  Ave, Rochedale South. `CONTENT_SOURCE.md` §1 has the full table and the values
  to avoid.
- **Scope is all five pages:** `index.html`, `about.html`, `contact.html`,
  `docs/design-system.html`, plus a new `capability.html`.

Two things I want you to be careful about, because they are easy to get wrong:

- **Gold fails contrast on cream** (2.58:1 measured). It is a dark-background
  colour. `BRIEFING.md` §6 has the full measured table — follow it, and fix the
  `--colour-stone` muted-text defect it identifies.
- **`contact.js` field names are a contract** with the Google Apps Script
  endpoint. Restyle the contact form; do not touch its form logic or field
  names.

Work on a branch, commit in logical steps, and open a PR when the definition of
done in `BRIEFING.md` §7 is met. Show me the home page rendered at mobile and
desktop widths before you open it.

Start by reading the package and the current site, then tell me your plan for
the home page — especially how you intend to build the ten-step IFL lifecycle
section, which is the centrepiece.
