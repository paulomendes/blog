// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://paulomendes.me',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
