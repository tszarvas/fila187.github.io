# tamasszarvas.me

Personal portfolio and CV site of Tamás Szarvas, built with [Astro](https://astro.build) and published with GitHub Pages at <https://tamasszarvas.me>. Hungarian is the default language (`/`), English is at `/en/`.

## Requirements

Node >= 22.23.4 (pinned in `.nvmrc`).

```sh
nvm use
npm ci
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve `dist/` |
| `npm run check` | Type check (`astro check`) |

There is no test suite or linter.

## Structure

- `src/pages/`: `index.astro` (HU), `en/index.astro` (EN), `404.astro`
- `src/components/`: one component per section, plus `Seo`, `Analytics`, `CookieConsent`
- `src/layouts/BaseLayout.astro`: head, early theme script, global CSS
- `src/i18n/ui.ts`: UI strings and locale helpers
- `src/data/`: typed `{ hu, en }` content (about, skills, experience, projects)
- `src/styles/global.css`: styles keyed on `data-theme`
- `public/`: favicons, OG image, `robots.txt`, `CNAME` and the CV PDFs (regenerated and committed manually)

Project rules for contributors and Claude Code are in [`CLAUDE.md`](CLAUDE.md) and `.claude/rules/`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. Other branches only build.
