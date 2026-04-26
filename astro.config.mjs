import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://www.johnfigueiredo.com',
  integrations: [react()],
  output: 'static',
  adapter: vercel(),
});
