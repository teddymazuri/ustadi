// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://teddymazuri.github.io',
  // Automatically uses '/' for local dev, and '/ustadi' for production builds
  base: process.env.NODE_ENV === 'production' ? '/ustadi' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});