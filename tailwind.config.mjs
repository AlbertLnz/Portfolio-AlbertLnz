/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'body-bg-light': '#f5f5f4',
        'body-bg-dark': '#111111',

        'section-bg-light': '#f2f2f2',
        'section-bg-dark': '#171717',

        'section-primary-border-light': '#d9d9d9',
        'section-primary-border-dark': '#2c2c2c',
        'section-secondary-border-light': '#d1d5db',
        'section-secondary-border-dark': '#262626',

        'heading-light': '#111827',
        'heading-dark': '#fefefe',
        'primary-light': '#374151',
        'primary-dark': '#d1d5db',
        'secondary-light': '#111827',
        'secondary-dark': '#a3a3a3',
        'tertiary-light': '#4b5563',
        'tertiary-dark': '#737373',
      },
    },
  },
  plugins: [],
}
