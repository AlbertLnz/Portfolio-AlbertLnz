// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        GITHUB_API_BASE_URL: envField.string({
          context: 'server',
          access: 'public',
        }),
        GITHUB_README_API: envField.string({
          context: 'server',
          access: 'public',
        }),
      },
    },
  },
})
