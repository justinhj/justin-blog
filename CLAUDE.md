# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This repository contains planning documentation for migrating the blog **Functional[Justin]** from Jekyll to Astro. It is NOT the actual blog codebase - it's a planning and reference workspace.

- **Current Blog (Jekyll):** https://github.com/justinhj/justinhj.github.io/
- **Live Site:** https://justinhj.github.io/
- **Target Framework:** Astro (to be built)

## Repository Structure

```
justin-blog/
├── referencematerial/
│   ├── notes.md                              # Complete migration plan and architecture
│   ├── darkmode.png                          # Dark mode design reference
│   └── 2025-07-30-journey-in-optimizing-a-bpe-tokenizer.html  # Sample post
├── .playwright-mcp/                          # Screenshots from site analysis
│   ├── homepage.png, homepage-dark.png
│   └── blogpost.png, blogpost-dark.png
└── .mcp.json                                 # Playwright MCP server config
```

## Key Documentation

### Primary Reference: referencematerial/notes.md

This is the central document containing:
- Complete analysis of existing Jekyll blog (102 posts, 114 tags)
- Comprehensive Astro migration plan with implementation phases
- Color schemes for both light and dark modes
- Component architecture and styling guidelines
- Content migration strategy (~102 posts from 2007-2025)
- Tag system details (114 unique tags with metadata)

**Important:** When working on migration tasks, always reference `notes.md` first for architectural decisions and implementation details.

## Existing Blog Architecture

The Jekyll blog being migrated has:
- **Content:** ~102 posts (HTML for 2007-2015, Markdown for 2016+)
- **Tag System:** 114 unique tags defined in `_my_tags/` directory
- **Styling:** Tailwind CSS v4.1.18 with light/dark mode support
- **Special Features:**
  - Interactive JavaScript elements (charts/visualizations)
  - Org-mode integration for content creation
  - Tag-based filtering and "Popular Posts" section
  - Social links (GitHub, Twitter, LinkedIn, YouTube)

## Design Reference

### Color Schemes (from notes.md)

**Light Mode:**
- Background: #F5F5DC (cream/beige)
- Text: #2C3E50 (dark gray/navy)
- Links: #0066CC (blue)
- Cards: #F8F4E8 (light tan)

**Dark Mode:**
- Background: #2B3544 (dark blue/navy)
- Text: #C9D1D9 (light gray)
- Links: #539BF5 (bright blue)
- Cards: #1F2937 (darker background)

### Visual References

Screenshots in `.playwright-mcp/` show:
- Homepage layout (light and dark modes)
- Blog post page structure (light and dark modes)
- Post card design, tag badges, navigation

Reference screenshot `referencematerial/darkmode.png` for dark mode implementation.

## Migration Workflow

When implementing the Astro migration:

1. **DO NOT copy code** from Jekyll layouts, SCSS, or CSS files
2. **DO reference** Jekyll blog for understanding design patterns and structure
3. **DO copy** content (`_posts/`), images, and tag metadata
4. **Source repository** to reference: https://github.com/justinhj/justinhj.github.io/

### Content Migration Notes

- Post filename format: `YYYY-MM-DD-post-title.{html|md|markdown}`
- Frontmatter format (Jekyll):
  ```yaml
  ---
  layout: post
  title: "Post Title"
  tags: [tag1, tag2, tag3]
  ---
  ```
- Tags have both slug and display name (map in `_my_tags/`)
- 13 posts tagged with "popular" for Popular Posts page
- Images stored in `/images/` with profile images available

## MCP Configuration

This repository uses Playwright MCP server for browser automation (already configured in `.mcp.json`). Used for analyzing the live blog during planning.

## Important Constraints

1. **Org-mode Integration:** Current blog uses Emacs Org-mode for content creation. Future workflow should consider maintaining this or transitioning to direct Markdown.

2. **URL Structure Preservation:** For SEO, consider maintaining Jekyll URLs:
   - Old: `/YYYY/MM/DD/post-title.html`
   - Options documented in notes.md

3. **Tag Handling:** 114 tags with some variants (e.g., game-dev vs gamedev). Normalization strategy needed.

4. **Special Content:** Some posts have embedded JavaScript (interactive charts). Migration strategy in notes.md.

## When Working on This Project

- Always check `referencematerial/notes.md` before starting work
- Reference the live site (https://justinhj.github.io/) for behavior
- Check existing repository (https://github.com/justinhj/justinhj.github.io/) for structure
- Screenshots in `.playwright-mcp/` directory for visual reference
- This is a planning repository - actual Astro implementation will be in a separate project
