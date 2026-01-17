# User Guide: Managing Your Astro Blog

Welcome to your new blog! This guide will help you understand how this project works, how to write new posts, and how to manage your content.

## What is Astro?

[Astro](https://astro.build) is a modern web framework designed for speed. Unlike other tools that send a lot of JavaScript to the user's browser, Astro strips away all the unused JavaScript by default, making your site load incredibly fast.

It allows you to write your content in **Markdown** or **MDX** (Markdown + Components), which is perfect for blogging.

## Quick Start

To start working on your blog locally:

1.  Open your terminal in the project folder.
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser to `http://localhost:4321`.

As you make changes to files, the browser will automatically reload to show you the updates.

---

## Authoring New Posts

All your blog posts live in the `src/content/posts/` directory.

### 1. Create a File
Create a new file in that folder. It is good practice to name it with the date and a "slug" (a URL-friendly name), like:
`2025-01-16-my-new-post.mdx`

### 2. Add Frontmatter
At the very top of your new file, you must add "frontmatter". This is metadata about your post, enclosed in triple dashes `---`.

Copy and paste this template:

```mdx
---
title: "My New Blog Post"
date: 2025-01-16
tags: ["coding", "astro", "tutorial"]
description: "This is a short summary of the post that appears on the homepage."
draft: false
---
```

*   **title**: The headline of your post.
*   **date**: The publication date (YYYY-MM-DD).
*   **tags**: A list of categories/topics.
*   **description**: A short summary shown on the post list.
*   **draft**: If `true`, the post won't show up in production builds (but you can see it in dev mode).

### 3. Write Your Content
Below the second `---`, you can write your post using Markdown.

```markdown
# This is a heading

You can write normal text here. You can also use **bold** and *italics*.

## Code Blocks
Since this blog uses Shiki, you get beautiful syntax highlighting automatically:

```javascript
const hello = "world";
console.log(hello);
```

## Adding and Managing Tags

The tagging system in this blog is **dynamic**. You do not need to register tags in a separate file.

*   **To add a new tag:** Simply add it to the `tags` list in your post's frontmatter.
    *   Example: `tags: ["new-topic", "updates"]`
*   **How it works:** When you build your site, Astro looks at all your posts, collects every unique tag, and automatically creates a page for it (e.g., `/tag/new-topic`).
*   **Tips:**
    *   Keep tags lowercase and hyphenated for consistency (e.g., use `web-design` instead of `Web Design`).
    *   You can reuse existing tags to group related posts together.

---

## Customization Basics

### Changing the Layout
The main visual structure is defined in `src/layouts/BaseLayout.astro`. This is where the `<head>`, `<body>`, `Header`, and `Footer` are set up.

### Styling
This project uses **Tailwind CSS**.
*   **Global Styles:** Check `src/styles/global.css` for site-wide settings like font families or custom color variables.
*   **Component Styles:** You can add Tailwind classes directly to HTML elements in your `.astro` components (e.g., `<div class="p-4 bg-red-500">`).

### Navigation
To add links to the navigation menu, edit `src/components/Navigation.astro`.

---

## Publishing

When you are ready to share your blog with the world:

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This creates a `dist/` folder containing your static website.
3.  You can upload the contents of the `dist/` folder to any static host like GitHub Pages, Netlify, or Vercel.
