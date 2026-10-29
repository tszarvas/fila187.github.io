---
name: add-content
description: Add or edit a skill badge, experience item or project in src/data for both languages. Use when the user wants to change site content.
---

# Add or edit content

1. Find the right file: `src/data/skills.ts`, `experience.ts`, `projects.ts` (or `about.ts`). UI labels go to `src/i18n/ui.ts`.
2. Fill **both** `hu` and `en` for every translatable field. Language-invariant fields (badges, dates, company names, tags) are stored once.
3. Follow the existing entry shape; the types enforce that both languages are present.
4. Run `npm run check` and `npm run build`.
5. Optionally run the `i18n-parity-checker` agent.

The sitemap `lastmod` is generated at build time; nothing else to update.
