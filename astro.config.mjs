// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://vr-quantum.netlify.app/",
  integrations: [icon()],
  adapter: netlify()
});