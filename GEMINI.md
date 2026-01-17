# Gemini Context: Functional[Justin] Blog

This repository contains the source code and planning documents for the **Functional[Justin]** blog migration from Jekyll to Astro.

## Repository Structure

*   **`referencematerial/`**: Contains migration plans, notes, design references, original site CSS, and original blog posts.
*   **`CLAUDE.md`**: Legacy context file containing detailed migration notes and architectural decisions.
*   **`.playwright-mcp/`**: Visual reference screenshots captured during the analysis phase.

## Project: `astro-blog`

This directory contains the actual implementation of the blog using Astro v5.

### Key Technologies
*   **Framework:** [Astro](https://astro.build/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first)
*   **Content:** MDX (Markdown + JSX)
*   **RSS:** `@astrojs/rss`

### Development Commands
Run these commands from the project root:

*   **Start Dev Server:** `npm run dev` (Runs on `http://localhost:4321`)
*   **Build Production:** `npm run build` (Outputs to `dist/`)
*   **Preview Build:** `npm run preview`

### Directory Layout (`src/`)
*   **`content/posts/`**: Blog posts in `.mdx` format.
*   **`content/config.ts`**: Defines the data schema (Frontmatter) for posts.
*   **`pages/`**: Application routes.
    *   `index.astro`: Homepage.
    *   `posts/[...slug].astro`: Individual blog post pages.
    *   `tag/[tag].astro`: Tag archive pages.
*   **`components/`**: Reusable UI components (`Header`, `Footer`, `PostCard`, etc.).
*   **`layouts/`**:
    *   `BaseLayout.astro`: Main HTML shell.
    *   `PostLayout.astro`: Wrapper for blog post content.
*   **`styles/global.css`**: Global CSS imports and base styles.

## Content Management

### Frontmatter Schema
All posts in `src/content/posts/` must adhere to this schema:

```yaml
---
title: "Post Title"
date: 2025-01-16  # YYYY-MM-DD
tags: ["tag1", "tag2"]
description: "Optional summary for SEO and previews"
draft: false      # Set to true to hide from build
---
```

### conventions
1.  **Components:** Use `.astro` files for UI components. Place them in `src/components/`.
2.  **Images:** Static assets go in `public/images/`.
3.  **New Posts:** Create new files in `src/content/posts/` using the naming convention `YYYY-MM-DD-slug.mdx`.

## Design System

The design mimics the legacy Jekyll blog with modern improvements.

*   **Theme:** Light/Dark mode support (system preference + toggle).
*   **Light Mode:**
    *   Background: Cream/Beige (`#F5F5DC`)
    *   Text: Dark Navy (`#2C3E50`)
*   **Dark Mode:**
    *   Background: Dark Navy (`#2B3544`)
    *   Text: Light Gray (`#C9D1D9`)

## Reference Material
*   **`referencematerial/notes.md`**: The source of truth for migration decisions, tag mappings, and architectural plans.
*   **`referencematerial/darkmode.png`**: Visual target for the dark mode implementation.
*   **`referencematerial/cssinfo.md`**: Details about the CSS from the original site intended for migration.
*   **`referencematerial/_posts/`**: Contains the original site's blog posts in HTML format with Jekyll frontmatter.
