# Functional[Justin] - Astro Blog

An Astro-based static blog migrated from Jekyll, featuring a clean design with light/dark mode support.

## Features

- **Light/Dark Mode** - Automatic system preference detection with manual toggle
- **Responsive Design** - Mobile-first approach with desktop optimizations
- **Tag System** - Dynamic tag pages for content organization
- **RSS Feed** - Available at `/rss.xml`
- **SEO Optimized** - Open Graph and Twitter meta tags
- **Syntax Highlighting** - Shiki with github-dark theme
- **MDX Support** - Write posts with JSX components

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support
- [Shiki](https://shiki.matsu.io/) - Syntax highlighting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

The built site will be in the `dist/` directory.

## Project Structure

```
astro-blog/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── TagBadge.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/            # Route pages
│   │   ├── index.astro
│   │   ├── topposts.astro
│   │   ├── posts/[...slug].astro
│   │   └── tag/[tag].astro
│   ├── content/          # Content collections
│   │   ├── config.ts
│   │   └── posts/        # Blog posts (MDX)
│   ├── styles/           # Global styles
│   │   └── global.css
│   └── utils/            # Utility functions
│       └── posts.ts
├── public/               # Static assets
│   ├── images/
│   └── favicon.svg
├── astro.config.mjs      # Astro configuration
└── tailwind.config.mjs   # Tailwind configuration
```

## Adding New Posts

Create a new `.mdx` file in `src/content/posts/` with the following frontmatter:

```yaml
---
title: "Your Post Title"
date: 2025-01-16
tags: ["tag1", "tag2"]
description: "A brief description of your post"
---

Your content here...
```

## Color Scheme

### Light Mode
- Background: `#F5F5DC` (cream/beige)
- Text: `#2C3E50` (dark navy)
- Links: `#0066CC` (blue)
- Cards: `#F8F4E8` (light tan)

### Dark Mode
- Background: `#2B3544` (dark navy)
- Text: `#C9D1D9` (light gray)
- Links: `#539BF5` (bright blue)
- Cards: `#1F2937` (darker background)

## License

© 2025 Justin Heyes-Jones. All Rights Reserved.
