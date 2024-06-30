import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), react()],
  vite: {
    css: {
      transformer: "lightningcss"
    }
  }
});