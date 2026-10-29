import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tamasszarvas.me',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Nyelvi alternatívák (xhtml:link) a sitemapben; a 404 kimarad.
      i18n: { defaultLocale: 'hu', locales: { hu: 'hu-HU', en: 'en-US' } },
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
