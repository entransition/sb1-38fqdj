/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'eco': {
          50: '#f2f7f2',
          100: '#e6efe6',
          200: '#bfd6bf',
          300: '#86b786',
          400: '#4d944d',
          500: '#2b682b',
          600: '#1f4d1f',
          700: '#163916',
          800: '#0d240d',
          900: '#071207',
        },
        'earth': {
          50: '#faf6f3',
          100: '#f5ede7',
          200: '#e6d5c7',
          300: '#d7bda7',
          400: '#c8a587',
          500: '#b98d67',
          600: '#8a684c',
          700: '#5c4632',
          800: '#2e2319',
          900: '#17110c',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}