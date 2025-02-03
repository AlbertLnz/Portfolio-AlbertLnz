// @ts-check
import { defineConfig, envField, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  image: { service: passthroughImageService() },

  redirects: {
    '/': 'en',
  },

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
  output: 'server',
  adapter: vercel(),
})
