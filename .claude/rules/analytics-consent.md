---
name: analytics-consent
description: GA4 Consent Mode and cookie banner invariants.
paths:
  - "src/components/Analytics.astro"
  - "src/components/CookieConsent.astro"
  - "src/layouts/**"
  - "src/styles/**"
---

# Analytics and consent

- GA4 id is `G-ZNR3H26MBY`.
- `gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',wait_for_update:500})` must run before gtag.js loads. These scripts are `is:inline`, in this order: consent default, async gtag.js, `js` + `config`.
- Keep `#cookieConsent[hidden]{display:none}` in the CSS.
- Keep the localStorage keys `cookie_consent` (`granted` / `denied`) and `theme`. Wrap every localStorage access in `try/catch`.
- Keep the `cv_download` event on `a[download]` clicks.
- The consent choice is shared between `/` and `/en/` (same key, same origin).
