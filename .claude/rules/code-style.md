---
name: code-style
description: Code style for Astro components, scripts and config.
paths:
  - "src/**"
  - "astro.config.mjs"
---

# Code style

- Code comments are written in Hungarian.
- `is:inline` only for scripts that must run before render (theme) or before gtag (consent default). Everything else is a bundled `<script>`.
- Keep markup and class names from the old `index.html`, so `global.css` applies unchanged.
- TypeScript is strict (`astro/tsconfigs/strict`); `npm run check` must pass.
