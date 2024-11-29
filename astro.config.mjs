import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"

import robots from 'astro-robots';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://backlandtech.com',
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress(), robots(), sitemap()],
})