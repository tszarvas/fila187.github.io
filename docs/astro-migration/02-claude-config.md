# 02 Claude config (.claude)

**Depends on:** 01 (needs the planned structure only)

## Goal
Rules, skills and agents so future sessions keep the i18n, consent and SEO invariants intact.

## Files touched
`.claude/rules/*.md`, `.claude/skills/*/SKILL.md`, `.claude/agents/*.md`, `.claude/settings.json`, `CLAUDE.md`.

## Rules (`.claude/rules/`, each with `paths:` frontmatter)
- `i18n.md`: every copy change updates both `hu` and `en`; HU is default and fallback; no copy hard-coded in components.
- `analytics-consent.md`: Consent Mode default is `denied` before gtag.js loads; keep the `#cookieConsent[hidden]{display:none}` rule; keep localStorage keys `cookie_consent` and `theme`.
- `seo.md`: canonical, hreflang, OG and JSON-LD stay in sync across locales; bump the `og-image-vN` suffix when the image changes.
- `code-style.md`: comments in Hungarian; `is:inline` only for scripts that must run before render or before gtag.

## Skills (`.claude/skills/`)
- `add-content`: add or edit a skill badge, experience item or project in `src/data/*` for both languages.
- `deploy`: build, preview, push, then watch the Pages workflow with `gh run watch`.
- `update-cv`: replace the PDFs in `public/`, keeping the file names.

## Agents (`.claude/agents/`)
- `i18n-parity-checker`: read-only; diffs HU/EN data and UI keys, reports missing translations.
- `seo-auditor`: builds, then checks `dist/` for meta tags, hreflang, sitemap and JSON-LD validity.

## Other
- `.claude/settings.json`: allow `npm run *`, `npx astro *`, read-only `gh run *`.
- Rewrite `CLAUDE.md` for the Astro architecture, linking the rules and skills (final pass in task 09).

## Acceptance
- Every file has valid frontmatter (`name`, `description`, and `paths` for rules).
- Agents are read-only except where a build is required.
