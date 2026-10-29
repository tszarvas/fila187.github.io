# 07 SEO

**Depends on:** 05 (and 06 for the head order)

## Goal
Per-locale metadata, hreflang, structured data and a generated sitemap.

## Files touched
`src/components/Seo.astro`, `astro.config.mjs`, `public/robots.txt`, `src/i18n/ui.ts`.

## Steps
1. `Seo.astro` emits, per locale:
   - `<title>` and meta description. The HU description must be written; the current one is English only.
   - canonical: `https://tamasszarvas.me/` or `https://tamasszarvas.me/en/`
   - `og:type`, `og:url`, `og:title`, `og:description`, `og:locale` (`hu_HU` / `en_US`) and `og:locale:alternate`
   - `og:image` / `twitter:image` = `https://tamasszarvas.me/og-image-v2.png`, 1200x630, `twitter:card=summary_large_image`
   - `<link rel="alternate" hreflang="hu|en|x-default">`, with `x-default` pointing to `/`
2. JSON-LD `Person` per locale: localized `jobTitle` and `description`, `inLanguage`; the other fields (`url`, `image`, `email`, `address`, `knowsAbout`, `sameAs`) are copied from `index.html` lines 251-272.
3. `@astrojs/sitemap` with `i18n: { defaultLocale: 'hu', locales: { hu: 'hu-HU', en: 'en-US' } }`, filtering out `/404`.
4. `public/robots.txt`: `Sitemap: https://tamasszarvas.me/sitemap-index.xml`.

## Acceptance
- `dist/sitemap-index.xml` lists both URLs with `xhtml:link` alternates.
- Each built page has the correct canonical, hreflang, `og:locale` and valid JSON-LD.
- `/en` redirects to `/en/` on GitHub Pages (check after deploy).
