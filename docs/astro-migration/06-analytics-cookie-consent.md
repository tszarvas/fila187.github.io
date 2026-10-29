# 06 Analytics and cookie consent

**Depends on:** 05

## Goal
GA4 Consent Mode and the cookie banner behave exactly as today.

## Files touched
`src/components/Analytics.astro`, `src/components/CookieConsent.astro`, `src/layouts/BaseLayout.astro`, `src/components/HomePage.astro`.

## Steps
1. `Analytics.astro`, in the head, all `is:inline`, in this order:
   - `gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',wait_for_update:500})`
   - async `https://www.googletagmanager.com/gtag/js?id=G-ZNR3H26MBY`
   - `gtag('js', new Date())` and `gtag('config','G-ZNR3H26MBY',{anonymize_ip:true})`
2. `CookieConsent.astro`: `#cookieConsent` with `role="dialog"`, the `hidden` attribute, and text and button labels for the current locale (`elutasítom()` / `decline()`, `elfogadom()` / `accept()`).
3. Its script keeps the logic from `index.html` lines 550-587: `localStorage('cookie_consent')` is `granted` or `denied`; `granted` calls `gtag('consent','update',...)`; no stored value shows the banner.
4. Keep the `cv_download` event on `a[download]` clicks (lines 589-596).
5. Make sure `#cookieConsent[hidden]{display:none}` is still in the CSS.

## Acceptance
- Fresh profile: banner shows, no `_ga` cookie.
- Decline: banner hides and stays hidden after reload, still no `_ga` cookie.
- Accept: `_ga` cookie appears and a `collect` request shows in the Network tab.
- A CV click sends `cv_download`.
- The choice is shared between `/` and `/en/` (same origin, same localStorage key).
