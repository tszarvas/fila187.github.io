# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/CV site for Tamás Szarvas, built with Astro 7 and served by GitHub Pages at `tamasszarvas.me` (see `public/CNAME`). Hungarian is the default language at `/`, English lives at `/en/`; there is no auto-redirect by browser language. The migration history from the old single `index.html` is in `docs/astro-migration/`.

There is no test suite or linter. `npm run check` (`astro check`) is the type check.

## Commands

- `nvm use` (Node >= 22.23.4, pinned in `.nvmrc`), then `npm ci`
- `npm run dev`: dev server
- `npm run build`: build to `dist/`
- `npm run preview`: serve `dist/`
- `npm run check`: type check

Deploying means pushing to `master`. The GitHub Actions workflow `.github/workflows/deploy.yml` builds and publishes `dist/` to Pages. Other branches only build, they never deploy.

## Architecture

- `src/pages/index.astro` (Hungarian, at `/`), `src/pages/en/index.astro` (English, at `/en/`), `src/pages/404.astro`
- `src/components/*.astro`: one component per section, plus `Seo`, `Analytics`, `CookieConsent`
- `src/layouts/BaseLayout.astro`: head, early theme script, global CSS
- `src/i18n/ui.ts`: UI strings, `useTranslations`, locale URL helpers
- `src/data/*.ts`: typed `{ hu, en }` content (about, skills, experience, projects)
- `src/styles/global.css`: styles keyed on `data-theme`
- `public/`: favicons, `og-image-v2.png`, `robots.txt`, `CNAME` and the CV PDFs (regenerated and committed manually, not built from this repo)

## Invariants

Path-scoped rules in `.claude/rules/`:

- [i18n](.claude/rules/i18n.md): both languages for every copy change, HU default and fallback
- [analytics-consent](.claude/rules/analytics-consent.md): Consent Mode defaults to `denied`, banner and localStorage keys
- [seo](.claude/rules/seo.md): canonical, hreflang, OG, JSON-LD, sitemap
- [code-style](.claude/rules/code-style.md): Hungarian comments, `is:inline` usage

## Skills and agents

- Skills (`.claude/skills/`): `add-content`, `deploy`, `update-cv`
- Agents (`.claude/agents/`): `i18n-parity-checker` (read-only), `seo-auditor` (builds, then audits `dist/`)
