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
        'dark-bg': '#1A1B26',
        'dark-card': 'transparent',
        'dark-text': '#A9B1D6',
        'dark-text-secondary': '#848484',
        'dark-link': '#2A7AE2',
        'dark-border': '#2C2E3B',
        'dark-heading': '#C0CAF5',

        // Shared colors
        'tag-blue': '#268bd2',
        'tag-hover': '#2071a8',
      },
      maxWidth: {
        'content': '800px',
      },
      fontFamily: {
        sans: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
