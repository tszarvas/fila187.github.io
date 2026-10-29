# 03 i18n and content

**Depends on:** 01

## Goal
Typed, single-source content for both languages, plus helpers for locale-aware URLs.

## Files touched
`astro.config.mjs`, `src/i18n/ui.ts`, `src/data/{about,skills,experience,projects}.ts`.

## Steps
1. In `astro.config.mjs`: `i18n: { defaultLocale: 'hu', locales: ['hu', 'en'], routing: { prefixDefaultLocale: false } }`.
2. `src/i18n/ui.ts`: UI strings (nav labels, `cv_letoltese()` / `download_cv()`, `kapcsolat()` / `contact()`, cookie banner text, aria labels), `useTranslations(lang)`, `getLangFromUrl`, and `getAlternateUrl` built on `getRelativeLocaleUrl` from `astro:i18n`. Missing key falls back to HU.
3. `src/data/*.ts`: typed arrays with `{ hu, en }` fields. Copy text **verbatim** from `index.html` lines 313-464. Values that do not change per language (badges, dates, company names, tags) are stored once.
4. Export `type Lang = 'hu' | 'en'` from one place.

## Acceptance
- `npm run check` passes.
- Every translatable field has both `hu` and `en` (the type enforces this).
- The text matches `index.html` word for word (diff by eye or script).
