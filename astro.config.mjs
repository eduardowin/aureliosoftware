import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aureliosoftware.es',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
