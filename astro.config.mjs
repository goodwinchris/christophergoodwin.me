// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.christophergoodwin.me',
  redirects: {
    "/photography/3-2026-france": "/photography/france",
    "/photography/2-2026-joshua-tree": "/photography/joshua-tree",
    "/photography/1-2025-winter": "/photography/winter",
  },
  fonts: [{
      provider: fontProviders.local(),
      name: "Edmondsans",
      cssVariable: "--font-edmondsans",
      options: {
          variants: [{
              src: ['./src/assets/fonts/edmondsans/edmondsans-regular.woff2'],
              weight: '400',
              style: 'normal'
          },
          {
              src: ['./src/assets/fonts/edmondsans/edmondsans-medium.woff2'],
              weight: '500',
              style: 'normal'
          },
          {
              src: ['./src/assets/fonts/edmondsans/edmondsans-bold.woff2'],
              weight: '700',
              style: 'normal'
          }]
      }
  }],
    output: 'server',
    adapter: netlify()  
});
