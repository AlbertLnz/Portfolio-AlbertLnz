// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from 'vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
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
    },
  },
})
