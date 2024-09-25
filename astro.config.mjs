// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        PRODUCTION: envField.boolean({
          context: 'server',
          access: 'public',
        }),
        GITHUB_API_BASE_URL: envField.string({
          context: 'server',
          access: 'public',
        }),
        GITHUB_README_API: envField.string({
          context: 'server',
          access: 'public',
        }),
        IP_INFO_API: envField.string({
          context: 'server',
          access: 'public',
        }),
        OPEN_WEATHER_API_URL: envField.string({
          context: 'server',
          access: 'public',
        }),
        OPEN_WEATHER_API_KEY: envField.string({
          context: 'server',
          access: 'secret',
        }),
      },
    },
  },
})
