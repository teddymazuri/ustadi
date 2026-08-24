// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.NETLIFY 
    ? 'https://ustadi.netlify.app' 
    : 'https://teddymazuri.github.io',
  base: process.env.NETLIFY ? '/' : '/ustadi/',
  vite: {
    plugins: [tailwindcss()]
  }
});