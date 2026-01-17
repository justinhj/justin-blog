/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#FFFAF0',
        'light-card': '#EEE8D5',
        'light-text': '#586E75',
        'light-text-secondary': '#6C757D',
        'light-link': '#1A73E8',
        'light-border': '#D9CEB8',

        // Dark mode colors
        'dark-bg': '#171c24',
        'dark-card': '#252d3a',
        'dark-text': '#C9D1D9',
        'dark-text-secondary': '#8B949E',
        'dark-link': '#539BF5',
        'dark-border': '#30363D',
        'dark-heading': '#E6EDF3',

        // Shared colors
        'tag-blue': '#268bd2',
        'tag-hover': '#2071a8',
      },
      maxWidth: {
        'content': '1200px',
      },
      fontFamily: {
        sans: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
