/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#F5F5DC',
        'light-card': '#F8F4E8',
        'light-text': '#2C3E50',
        'light-text-secondary': '#6C757D',
        'light-link': '#0066CC',

        // Dark mode colors
        'dark-bg': '#2B3544',
        'dark-card': '#1F2937',
        'dark-text': '#C9D1D9',
        'dark-text-secondary': '#8B949E',
        'dark-link': '#539BF5',
        'dark-border': '#30363D',

        // Shared colors
        'tag-blue': '#3498DB',
      },
      maxWidth: {
        'content': '1200px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
