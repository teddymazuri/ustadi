// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.NETLIFY 
    ? 'https://ustadi-org.netlify.app'  // ← Keep this for now
    : 'https://teddymazuri.github.io',
  base: process.env.NETLIFY ? '/' : '/ustadi/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],  // ← Just add this
});