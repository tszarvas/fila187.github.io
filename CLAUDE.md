# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/CV site for Tamás Szarvas, served by GitHub Pages at `tamasszarvas.me` (see `public/CNAME`). It is being migrated from a single `index.html` to Astro 7 on the `astro-migration` branch. The plan and task status are in `docs/astro-migration/README.md`. The root `index.html` stays until task 09 so the old site can be compared against; once the migration lands, this file gets its final rewrite there.

There is no test suite or linter. `npm run check` (`astro check`) is the type check.

## Commands

- `nvm use` (Node >= 22.23.4, pinned in `.nvmrc`), then `npm ci`
- `npm run dev`: dev server
- `npm run build`: build to `dist/`
- `npm run preview`: serve `dist/`
- `npm run check`: type check

Deploying means pushing to `master`. A GitHub Actions workflow (`.github/workflows/deploy.yml`, task 08) builds and publishes `dist/` to Pages.

## Architecture (target structure)

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
