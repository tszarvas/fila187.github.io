# 05 Components and pages

**Depends on:** 03, 04

## Goal
Both language pages render the full site from shared components.

## Files touched
`src/components/{Header,Hero,About,Skills,Experience,Projects,Contact,Footer,HomePage}.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/404.astro`.

## Steps
1. One component per section, each taking `lang` and reading from `src/data` and `src/i18n`. Markup and class names stay the same as in `index.html`, so the CSS applies without changes.
2. `Header`: nav links, language toggle as `<a href={alternateUrl} hreflang={other}>` showing `EN` or `HU`, theme button, CV button, hamburger.
3. CV `href` is chosen at build time per locale (`cv-szarvas-tamas-hu.pdf` / `-en.pdf`). `syncCvLinks` goes away.
4. Theme toggle and hamburger logic move to a bundled `<script>` in the components. Keep the `try/catch` around localStorage.
5. Footer year stays client-side, so the output does not go stale.
6. `HomePage.astro` composes everything for a given `lang`. `index.astro` uses `hu`, `en/index.astro` uses `en`.
7. `404.astro`: bilingual, with `noindex`.

## Acceptance
- `/` and `/en/` show the same sections in the right language, with working anchors, mobile menu, theme toggle and language link.
- The page works without a JS bundle except for the toggles and the footer year.
