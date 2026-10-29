# Astro migration: tamasszarvas.me

Moving the single-file `index.html` to Astro (latest, 7.x). Hungarian is the default language at `/`, English lives at `/en/`. The site is built in CI and deployed to GitHub Pages.

## Decisions
- Astro 7.4.4, needs Node >= 22.23.4 (local Node is 20, so upgrade first; `.nvmrc` pins it).
- No auto-redirect by browser language. Every URL always shows its own language; the toggle is a plain link between `/` and `/en/`.
- `site: https://tamasszarvas.me`, `base: /` (user site with custom domain).
- Work happens on the `astro-migration` branch. `master` deploys the live site, so merge only after task 09 passes.

## Tasks (do in order)

- [x] [01 Tooling and scaffold](01-tooling-scaffold.md)
- [x] [02 Claude config (.claude)](02-claude-config.md)
- [x] [03 i18n and content](03-i18n-and-content.md)
- [x] [04 Layout and styles](04-layout-and-styles.md)
- [x] [05 Components and pages](05-components-and-pages.md)
- [x] [06 Analytics and cookie consent](06-analytics-cookie-consent.md)
- [x] [07 SEO](07-seo.md)
- [x] [08 GitHub Pages deploy](08-github-pages-deploy.md)
- [x] [09 Verification and cutover](09-verification-cutover.md)

## Dependencies

```
01 -> 03 -> 04 -> 05 -> 06 -> 07 -> 09
01 -> 02
01 -> 08 -> 09
```

Task 02 only needs the planned structure, so it can run in parallel with 03-07.
