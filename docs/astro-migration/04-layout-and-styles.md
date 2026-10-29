# 04 Layout and styles

**Depends on:** 03

## Goal
A base layout with theme handling and the global CSS, with no language switching in client code.

## Files touched
`src/layouts/BaseLayout.astro`, `src/styles/global.css`.

## Steps
1. `BaseLayout.astro` props: `lang`, `title`, `description`. Renders `<html lang={lang} data-theme="dark">`, charset, viewport, favicon links, the Google Fonts preconnect and stylesheet, slots for Seo and Analytics (tasks 06/07), then `<slot />`.
2. Theme early script as `is:inline`, in the head before the styles. Keep the order localStorage > `prefers-color-scheme` > light, and the Hungarian comments. Remove the language detection part.
3. Move the CSS from `index.html` lines 85-249 to `src/styles/global.css`, unchanged. Delete only the two `[data-lang-content]` hide rules. Keep `#cookieConsent[hidden]{display:none}`.
4. Import the CSS in the layout.

## Acceptance
- Dark/light theme matches the current site, with no flash on reload.
- No `data-lang` attribute or `data-lang-content` marker remains.
