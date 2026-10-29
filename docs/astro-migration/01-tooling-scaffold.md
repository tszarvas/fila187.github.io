# 01 Tooling and scaffold

**Depends on:** none

## Goal
An empty Astro 7 project builds, with all static assets in `public/`.

## Files touched
`.nvmrc`, `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `public/*`, removal of root `sitemap.xml`.

## Steps
1. Upgrade local Node to >= 22.23.4 (`nvm install`), write the version to `.nvmrc`.
2. `npm init`, set `"type": "module"` and `"engines": { "node": ">=22.23.4" }`.
3. `npm i astro@^7 @astrojs/sitemap` and `npm i -D @astrojs/check typescript`.
4. `astro.config.mjs`: `site: 'https://tamasszarvas.me'`, `trailingSlash: 'always'`, `build.format: 'directory'`, the sitemap integration (configured in task 07), i18n (configured in task 03).
5. `tsconfig.json` extends `astro/tsconfigs/strict`.
6. `.gitignore`: `node_modules/`, `dist/`, `.astro/`, `.idea/`.
7. `git mv` into `public/`: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-image-v2.png`, `cv-szarvas-tamas-hu.pdf`, `cv-szarvas-tamas-en.pdf`, `CNAME`, `robots.txt`.
8. Delete root `sitemap.xml` (generated from now on).
9. Scripts: `dev`, `build`, `preview`, `check` (`astro check`).

## Acceptance
- `npm run build` succeeds with a placeholder page.
- `dist/` contains `CNAME`, `robots.txt`, favicons, PDFs and `og-image-v2.png`.
- Keep the root `index.html` until task 09 so the old site can be compared against.
