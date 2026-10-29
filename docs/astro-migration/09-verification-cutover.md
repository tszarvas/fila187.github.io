# 09 Verification and cutover

**Depends on:** 02-08

## Goal
Prove parity with the old site, then remove the old files and merge.

## Checks
1. `nvm use && npm ci && npm run check && npm run build` with no errors.
2. `npm run preview`: compare `/` and `/en/` with the old `index.html` section by section (copy matches word for word). Theme persists with no flash, the language link switches URLs, each CV button downloads the right PDF.
3. Cookie flow as in task 06, in a fresh profile.
4. `dist/` checks from task 07 (sitemap, canonical, hreflang, `og:locale`, JSON-LD, `CNAME`, `robots.txt`).
5. Run the `i18n-parity-checker` and `seo-auditor` agents.
6. Lighthouse SEO and Accessibility on both URLs are no worse than the current live site.

## Cutover
1. Delete the root `index.html`.
2. Final rewrite of `CLAUDE.md` and `README.md` (commands, structure, rules/skills links).
3. Merge `astro-migration` into `master`, then watch the deploy (`gh run watch`).
4. After deploy: `https://tamasszarvas.me/` and `/en` load over HTTPS. Validate the JSON-LD with Google's Rich Results test, and submit `sitemap-index.xml` in Search Console.

## Rollback
Revert the merge commit on `master`. Pages then needs the old source set (branch `master`, `/`) if the Actions source was already switched.
