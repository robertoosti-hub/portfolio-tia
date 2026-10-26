// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Configurazione per GitHub Pages.
 *
 * - SITE: dominio pubblico, es. https://nomeutente.github.io
 * - BASE: sottocartella del repository, es. /portfolio-tia
 *   (usa "/" se il repository si chiama nomeutente.github.io)
 *
 * Nel workflow .github/workflows/deploy.yml questi valori vengono
 * calcolati automaticamente dal nome del repository.
 */
const site = process.env.SITE ?? 'https://example.github.io';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { format: 'directory' },
  image: {
    // Le foto in src/assets/photos vengono convertite in AVIF/WebP responsive.
    responsiveStyles: false,
  },
});
