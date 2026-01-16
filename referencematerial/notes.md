# existing blog location
https://justinhj.github.io/

# sample post
https://justinhj.github.io/2025/07/30/journey-in-optimizing-a-bpe-tokenizer.html

# existing repository
https://github.com/justinhj/justinhj.github.io/

---

# Astro Blog Migration Plan

## Overview
This document outlines the plan to rebuild the existing Jekyll-based static blog (Functional[Justin]) using Astro, recreating the functionality and appearance without copying existing code.

## Existing Repository Analysis

### Repository Information
- **Repository:** https://github.com/justinhj/justinhj.github.io/
- **Framework:** Jekyll static site generator
- **Posts:** ~102 blog posts dating from 2007 to 2025
- **Tags:** 114 tag files in `_my_tags/` directory
- **Styling:** Tailwind CSS v4.1.18 + PostCSS + Autoprefixer
- **Content Creation:** Org-mode (Emacs) with export to Jekyll

### Current Technology Stack
- **Static Site Generator:** Jekyll
- **CSS Framework:** Tailwind CSS (utility-first)
- **Build Tools:**
  - PostCSS for CSS processing
  - Autoprefixer for browser compatibility
  - Jekyll for site generation
- **Content Format:**
  - Early posts (2007-2015): HTML
  - Recent posts (2016+): Markdown (.markdown, .md)
  - Org-mode source files in `/org/` directory

### Repository Structure
```
justinhj.github.io/
├── _config.yml           # Jekyll configuration
├── _posts/               # Blog posts (~102 posts)
├── _my_tags/             # Tag definition files (114 tags)
├── _layouts/             # Jekyll layout templates
├── _includes/            # Reusable template components
├── _sass/                # SCSS source files
├── org/                  # Org-mode source content
│   └── publish.el        # Emacs publish configuration
├── images/               # Media assets (~50 items)
│   ├── blogprofile.png
│   ├── blogprofiletransparent.png
│   └── [other-images]
├── css/                  # Compiled stylesheets
├── package.json          # Node.js dependencies
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

### Post Structure (from existing files)
Posts use minimal frontmatter:
```yaml
---
layout: post
title: "Post Title"
tags: [tag1, tag2, tag3, ...]
---
```

### Tag System Details
- **Total Tags:** 114 unique tags
- **Tag File Format:** Each tag has a dedicated `.md` file in `_my_tags/`
- **Tag File Structure:**
  ```yaml
  ---
  layout: blog_by_tag
  slug: tag-slug
  name: Tag Display Name
  ---
  ```

#### Complete Tag List (114 tags)
**Programming Languages & Frameworks:**
- Languages: python, scala, scala-3, clojure, common-lisp, c, c++, cpp, f#, r, elisp, emacs-lisp
- Frameworks: zio, cats, scalaz, monix, udash, scala.js, clojure-script

**Functional Programming Concepts:**
- monads, functors, applicative, applicative-functor, comonads, kleisli
- category-theory, monad-transformers, eithert
- pure-functional-programming, functional-programming

**Development Tools:**
- emacs, org-mode, dired, slime, lispworks
- git, svn, perforce, p4
- mysql, redis, docker
- command-line, bash, screen, tar, gzip
- win32, windows, msdos, cygwin, mingw32

**AI & ML:**
- ai, llm, tokenizer

**Specialized Topics:**
- game-dev, game-development, gamedev, game-programming, a-star-algorithm, astar-algorithm
- hacker-news-api, hacker-news, fetch, 47-degs
- performance, optimization
- data-structures, radix-trees, algorithms
- blogging, github-pages, jekyll
- personal-finance, geek, stack-overflow

**Web & Backend:**
- backend-dev, web-jump, smtp, email, rss, xml, parsing, latex

**OS & System:**
- ubuntu, linux, mac, ssh, fail2ban, scp, secure-file-transfer
- log4j, ipin, transmission

**Misc Tools:**
- tags, etags, find, grep, wget
- company-mode, growl, visual-studio

**Tags:**
- popular (13 posts marked as popular according to _config.yml)
- typelevel (Scala ecosystem)
- reftree, eredis

**Duplicates/Variants:**
- game-dev vs gamedev vs game-development
- astar-algorithm vs a-star-algorithm
- Various tag naming conventions (hyphens vs no hyphens)

### Configuration from _config.yml
```yaml
title: "Functional[Justin]"
email: justinhj+blog@gmail.com
public_email: justinhj@gmail.com
description: Principal Software Engineer. Streaming data at scale. Generative AI. Functional Programming. Neovim. Emacs.
baseurl: ""
url: "http://justinhj.github.io"
twitter_username: justinhj
github_username: justinhj
markdown: kramdown
plugins: [jekyll-mentions]

# Top 13 posts marked as popular
top_posts:
  - title: "The Magic of Lazy Lists"
  - title: "Comonads for Life"
  - title: "Monoids for Production"
  - title: "What's Ap with zio-prelude?"
  - title: "What's Ap?"
  - title: "How to blog with Org-mode"
  - title: "Monad Transformers - the prelude to ZPure"
  - title: "Using 47 Degree's Fetch library with ZIO"
  - title: "Hacker News API Part 5"
  - title: "Future with timeout"
  - title: "Future[Either] with Cats"
  - title: "Finding writable files in a directory in a windows command line"
```

### Social Media & External Links
- **Email:** justinhj+blog@gmail.com (contact), justinhj@gmail.com (public)
- **Twitter/X:** @justinhj
- **GitHub:** justinhj
- **LinkedIn:** /in/justinheyesjones (inferred from site)
- **YouTube:** /c/FunctionalJustin

### Image Assets
Available in `/images/` directory:
- **Profile Images:**
  - blogprofile.png (main profile)
  - blogprofiletransparent.png (with transparency)
  - bikeprofile.jpg
  - grumpyprofile.jpg
  - justinnew.png

- **Social Icons:**
  - email.png, linkedin.png, telegram.png, whatsap.png

- **Technical Visualizations:**
  - conway.gif, timeout.gif
  - comonads.jpg, monadtransformer.png, monadtransformers.png

- **Screenshots & Examples:**
  - Various UI and application screenshots
  - Image processing examples (girl.png series)
  - Unsplash credited photos

### Post Naming Convention
- **Format:** `YYYY-MM-DD-post-title.extension`
- **Extensions:** `.html` (early posts), `.markdown` or `.md` (recent posts)
- **Date Range:** 2007-09-07 to 2025-07-30
- **Total:** ~102 posts

### Build Process (from package.json)
```json
{
  "scripts": {
    "css": "tailwindcss -i ./_assets/css/input.css -o ./css/style.css",
    "css:watch": "tailwindcss -i ./_assets/css/input.css -o ./css/style.css --watch",
    "jekyll": "bundle exec jekyll build",
    "jekyll:serve": "bundle exec jekyll serve"
  },
  "devDependencies": {
    "@tailwindcss/cli": "^4.1.18",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18"
  }
}
```

## Site Analysis Summary

### Current Design & Layout

#### Visual Design
- Clean, minimal design with light/dark mode support
- Centered content layout with ample whitespace
- Professional typography with clear hierarchy
- Consistent header/navigation across all pages

#### Color Schemes

**Light Mode:**
- Background: Cream/beige (#F5F5DC approximate)
- Primary text: Dark gray/navy (#2C3E50 approximate)
- Links: Blue (#0066CC approximate)
- Tags/badges: Blue (#3498DB) with white text in rounded pills
- Header text: Navy/dark blue
- Card background: Light tan/beige (#F8F4E8)
- Dates: Lighter gray text

**Dark Mode:**
- Background: Very dark blue/navy (#2B3544 approximate)
- Primary text: Light gray/off-white (#C9D1D9 approximate)
- Secondary text: Medium gray (#8B949E approximate)
- Links: Bright blue (#539BF5 approximate)
- Tags/badges: Blue with white text (similar to light mode)
- Header text: Light gray/white
- Navigation: Blue links (#539BF5)
- Code blocks: Darker background (visible in post content)
- Icons: Light gray/white

#### Typography
- Main heading: Large, bold sans-serif font
- Body text: Readable sans-serif, comfortable line height
- Code blocks: Monospace font with syntax highlighting
- Dates: Smaller, lighter gray text (light mode) / medium gray (dark mode)

### Site Structure

#### Pages Identified
1. **Homepage** (`/index.html`)
   - Profile header with avatar image
   - Navigation menu
   - Chronological list of all blog posts
   - Post cards with date, title, and tags

2. **Popular Posts** (`/topposts.html`)
   - Same header/nav as homepage
   - Filtered list showing posts tagged with "popular"

3. **Individual Post Pages** (e.g., `/2025/07/30/journey-in-optimizing-a-bpe-tokenizer.html`)
   - Full post content with markdown rendering
   - Syntax highlighting for code blocks
   - Tag links
   - Date display

4. **Tag Pages** (e.g., `/tag/scala/`)
   - Lists all posts with specific tag
   - Shows post excerpts

5. **External Links**
   - YouTube Channel (external)
   - Speaking Events (`/talks.html`)
   - Privacy page (`/privacy.html`)

### Header/Banner Component
The header appears on every page and includes:
- Circular profile image (left side)
- Site title: "Functional[Justin]"
- Tagline: "Principal Software Engineer. Streaming data at scale. Generative AI. Functional Programming. Neovim. Emacs."
- Social links (horizontal icon row):
  - Email (justinhj+blog@gmail.com)
  - GitHub
  - X/Twitter
  - LinkedIn

### Navigation Menu
Horizontal navigation with bullet separators:
- All Posts
- Popular Posts
- YouTube Channel
- Speaking Events
- Privacy

### Post Card Design
Each post preview includes:
- Date (formatted: "Mon DD, YYYY")
- Post title (h3, blue link on hover)
- Tags (blue pill-shaped badges, clickable)
- Clean card with subtle background (light beige/tan)
- Rounded corners
- Hover effects on title

### Blog Post Page Features

#### Header Section
- Post title (large h1)
- Publication date
- "More posts about" with linked tags

#### Content Features Observed
- Multiple heading levels (h2, h3, h4, h5)
- Paragraphs with proper spacing
- Ordered and unordered lists
- Code blocks with syntax highlighting
- Inline code formatting
- Blockquotes
- Links (internal and external)
- Interactive charts/visualizations (JavaScript embedded)
- ASCII art diagrams in code blocks
- Colored text highlights for code tokens
- Image support (referenced but not visible in snapshot)

#### Content Structure
- Well-organized with table of contents structure
- Clear section headings
- Nested subsections
- Reference section at end
- Copyright notice

### Tag System
- Tags are clickable links
- Each tag has its own page showing all related posts
- Tag pages show post title, date, excerpt (first paragraph or two)
- Common tags observed: scala, functional-programming, emacs, python, ai, cpp, etc.

### Footer
- Simple footer (minimal content visible)
- RSS feed link: "subscribe via RSS"

## Astro Implementation Plan

### 1. Project Setup

#### Initialize Astro Project
```bash
npm create astro@latest justin-blog-astro
cd justin-blog-astro
npm install
```

#### Install Required Dependencies
```bash
# Markdown and content processing
npm install @astrojs/mdx
npm install @astrojs/rss
npm install reading-time

# Syntax highlighting
npm install shiki

# Utilities
npm install gray-matter
npm install date-fns
```

#### Configure Astro
Create/update `astro.config.mjs`:
- Enable MDX support
- Configure syntax highlighting with Shiki
- Set up site URL
- Configure build output

### 2. Project Structure

```
src/
├── components/
│   ├── Header.astro          # Profile, title, social links
│   ├── Navigation.astro      # Main nav menu
│   ├── PostCard.astro        # Post preview card
│   ├── PostList.astro        # List of post cards
│   ├── TagBadge.astro        # Individual tag pill
│   ├── TagList.astro         # Group of tags
│   ├── Footer.astro          # Site footer
│   └── BaseHead.astro        # HTML head meta tags
├── layouts/
│   ├── BaseLayout.astro      # Base HTML structure
│   ├── PostLayout.astro      # Blog post page layout
│   └── PageLayout.astro      # Static page layout
├── pages/
│   ├── index.astro           # Homepage (all posts)
│   ├── topposts.astro        # Popular posts page
│   ├── talks.astro           # Speaking events
│   ├── privacy.astro         # Privacy policy
│   ├── rss.xml.ts            # RSS feed generator
│   ├── posts/
│   │   └── [...slug].astro   # Dynamic post pages
│   └── tag/
│       └── [tag].astro       # Dynamic tag pages
├── content/
│   ├── config.ts             # Content collections config
│   └── posts/
│       ├── 2025-07-30-tokenizer.md
│       └── [other-posts].md
├── styles/
│   └── global.css            # Global styles
└── utils/
    ├── posts.ts              # Post utilities
    └── tags.ts               # Tag utilities

public/
├── images/
│   ├── profile.jpg           # Profile avatar
│   └── [post-images]
└── favicon.svg
```

### 3. Content Collection Setup

#### Content Config (`src/content/config.ts`)
Define schema for blog posts:
- title (string, required)
- date (date, required)
- tags (array of strings)
- description (string, optional)
- draft (boolean, default false)

#### Markdown Frontmatter Example
```yaml
---
title: "Optimizing training a GPT style Tokenizer with C++"
date: 2025-07-30
tags: ["ai", "cpp", "c++", "python", "optimization", "performance", "llm", "tokenizer"]
description: "Journey in optimizing a BPE tokenizer"
---
```

### 4. Component Development

#### ThemeToggle Component (`ThemeToggle.astro`) - NEW
Features:
- Toggle button for dark/light mode switching
- Respect system preferences on initial load
- Persist user preference in localStorage
- Sun/moon icon that changes with theme
- Smooth transitions
- Accessible (keyboard navigation, ARIA labels)

Implementation:
```astro
---
// ThemeToggle.astro
---
<button
  id="theme-toggle"
  type="button"
  class="theme-toggle"
  aria-label="Toggle dark mode"
>
  <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <!-- Sun icon SVG -->
  </svg>
  <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <!-- Moon icon SVG -->
  </svg>
</button>

<script>
  // Run on initial page load
  const initTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  initTheme();

  // Handle toggle button clicks
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
</script>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .sun-icon { display: none; }
  .moon-icon { display: block; }

  .dark .sun-icon { display: block; }
  .dark .moon-icon { display: none; }
</style>
```

#### Header Component (`Header.astro`)
Features:
- Circular profile image
- Site title and tagline
- Social media icon links
- Dark mode toggle button (ThemeToggle component)
- Responsive design
- Consistent across all pages
- Dark mode support for all elements

#### Navigation Component (`Navigation.astro`)
Features:
- Horizontal menu with bullet separators
- Active page highlighting
- Responsive (mobile hamburger menu)
- Links to main sections
- Dark mode color support

#### PostCard Component (`PostCard.astro`)
Props: title, date, tags, url, excerpt (optional)
Features:
- Date formatting
- Title as clickable link
- Tag list with badges
- Card styling with hover effects
- Rounded corners

#### TagBadge Component (`TagBadge.astro`)
Props: tag name
Features:
- Blue rounded pill design
- White text
- Link to tag page
- Hover effect

### 5. Page Layouts

#### BaseLayout (`BaseLayout.astro`)
- HTML structure
- Head with meta tags
- Header component
- Navigation component
- Main content slot
- Footer component
- Global styles

#### PostLayout (`PostLayout.astro`)
- Extends BaseLayout
- Post header (title, date, tags)
- Markdown content rendering
- Syntax highlighting
- Code block styling
- Responsive typography

#### PageLayout (`PageLayout.astro`)
- Extends BaseLayout
- For static pages (talks, privacy, etc.)
- Simple content area

### 6. Dynamic Pages

#### Homepage (`index.astro`)
- Get all published posts
- Sort by date (newest first)
- Render with PostCard components
- Title: "Posts"

#### Popular Posts (`topposts.astro`)
- Filter posts with "popular" tag
- Sort by date
- Render with PostCard components
- Title: "Popular"

#### Individual Post Page (`posts/[...slug].astro`)
- Use getStaticPaths() to generate all post pages
- Use PostLayout
- Render markdown content
- Display tags
- Add copyright notice

#### Tag Pages (`tag/[tag].astro`)
- Use getStaticPaths() to generate page for each tag
- Filter posts by tag
- Show post excerpts (first 100-200 words)
- Title: "Posts about '[Tag]'"

### 7. Styling Implementation

#### Note on Existing Styling
The current Jekyll site uses Tailwind CSS v4.1.18. While we're not copying the existing CSS files, we can reference the general design patterns and recreate them in Astro.

#### Styling Options for Astro

**Option 1: Tailwind CSS (Recommended - Maintains Consistency)**
- Install Tailwind integration: `@astrojs/tailwind`
- Use Tailwind v4.x to match existing version
- Recreate utility classes based on design analysis
- Benefits: Familiar if continuing with Tailwind, utility-first approach
- Install: `npm install @astrojs/tailwind tailwindcss`

**Option 2: Vanilla CSS with Variables**
- Use CSS custom properties for theming
- Scoped styles in Astro components
- Global stylesheet for base styles
- Benefits: No build dependencies, simple, performant

**Option 3: CSS Framework Alternative**
- Consider UnoCSS or other utility frameworks
- Benefits: Similar to Tailwind but with different features

**Recommended Approach:** Use Tailwind CSS to maintain consistency with the existing design system and leverage the existing Tailwind configuration as a reference (without copying).

#### Global Styles (`global.css`)

If using vanilla CSS with dark mode support:
```css
/* Color variables - Light Mode */
:root {
  --bg-primary: #F5F5DC;
  --bg-secondary: #F8F4E8;
  --text-primary: #2C3E50;
  --text-secondary: #6C757D;
  --link-color: #0066CC;
  --tag-bg: #3498DB;
  --tag-text: #FFFFFF;
  --border-color: #E0E0E0;
  --code-bg: #282c34;
}

/* Dark Mode Variables */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #2B3544;
    --bg-secondary: #1F2937;
    --text-primary: #C9D1D9;
    --text-secondary: #8B949E;
    --link-color: #539BF5;
    --tag-bg: #3498DB;
    --tag-text: #FFFFFF;
    --border-color: #30363D;
    --code-bg: #1F2937;
  }
}

/* Manual dark mode class (for toggle) */
.dark {
  --bg-primary: #2B3544;
  --bg-secondary: #1F2937;
  --text-primary: #C9D1D9;
  --text-secondary: #8B949E;
  --link-color: #539BF5;
  --tag-bg: #3498DB;
  --tag-text: #FFFFFF;
  --border-color: #30363D;
  --code-bg: #1F2937;
}

/* Base styles */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* Links */
a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  text-decoration: underline;
}

/* Code blocks */
pre {
  background-color: var(--code-bg);
  color: var(--text-primary);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', monospace;
}

/* Inline code */
:not(pre) > code {
  background-color: var(--bg-secondary);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

/* Tags */
.tag-badge {
  background-color: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  display: inline-block;
  margin: 0.25rem;
  font-size: 0.875rem;
}

/* Post cards */
.post-card {
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;
}

/* Date text */
.date-text {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Navigation */
nav a {
  color: var(--link-color);
}

/* Social icons - ensure they're visible in dark mode */
.social-icons img {
  filter: var(--icon-filter, none);
}

@media (prefers-color-scheme: dark) {
  .social-icons img {
    filter: brightness(0) invert(1);
  }
}

.dark .social-icons img {
  filter: brightness(0) invert(1);
}
```

If using Tailwind CSS with dark mode, configure `tailwind.config.mjs`:
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' for automatic dark mode
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
    },
  },
  plugins: [],
}
```

Example Tailwind usage in components:
```html
<body class="bg-light-bg dark:bg-dark-bg text-light-text dark:dark-text">
  <h1 class="text-light-text dark:text-dark-text">Title</h1>
  <a href="#" class="text-light-link dark:text-dark-link">Link</a>
  <div class="bg-light-card dark:bg-dark-card">Card content</div>
</body>
```

#### Component-Specific Styles
- Header: Flexbox layout, profile image sizing
- Navigation: Horizontal list with separators
- PostCard: Card design with hover effects
- Footer: Minimal styling

### 8. Utility Functions

#### Post Utilities (`utils/posts.ts`)
```typescript
// Get all posts sorted by date
export async function getSortedPosts()

// Get posts by tag
export async function getPostsByTag(tag: string)

// Get all unique tags
export async function getAllTags()

// Get popular posts
export async function getPopularPosts()

// Format date
export function formatDate(date: Date): string

// Get post excerpt
export function getExcerpt(content: string, length: number): string
```

#### Tag Utilities (`utils/tags.ts`)
```typescript
// Normalize tag names
export function normalizeTag(tag: string): string

// Get tag URL
export function getTagUrl(tag: string): string

// Count posts per tag
export function getTagCounts(posts: Post[]): Map<string, number>
```

### 9. Content Migration

#### Content Source
- **Source Repository:** https://github.com/justinhj/justinhj.github.io/
- **Posts Directory:** `_posts/` (~102 posts)
- **Images Directory:** `/images/` (~50 items including profile images)
- **Date Range:** 2007-09-07 to 2025-07-30

#### Post File Formats
- **Early posts (2007-2015):** `.html` files
- **Recent posts (2016-2025):** `.markdown` or `.md` files
- **Source content:** Org-mode files in `/org/` directory (optional reference)

#### Existing Post Frontmatter Structure
```yaml
---
layout: post
title: "Post Title"
tags: [tag1, tag2, tag3, ...]
---
```

#### Target Astro Frontmatter Structure
```yaml
---
title: "Post Title"
date: 2025-07-30  # Extracted from filename
tags: ["tag1", "tag2", "tag3"]
description: "Optional excerpt" # Can be extracted from first paragraph
draft: false
---
```

#### Migration Steps

**1. Clone Existing Repository**
```bash
git clone https://github.com/justinhj/justinhj.github.io.git temp-migration
```

**2. Extract Posts**
- Copy all files from `_posts/` directory
- Organize by year if needed

**3. Convert HTML Posts to Markdown**
- Identify HTML posts (2007-2015)
- Use pandoc or html2markdown for conversion
- Manually review and fix formatting issues
- Example: `pandoc -f html -t markdown post.html -o post.md`

**4. Update Frontmatter**
- Parse existing frontmatter
- Extract date from filename (`YYYY-MM-DD-post-title`)
- Convert tags array format
- Remove Jekyll-specific fields (`layout`)
- Add Astro-specific fields (`date`, `description`)

**5. Process Tag Files**
- Reference `_my_tags/` for complete tag list (114 tags)
- Create tag metadata file or constant in Astro
- Map tag slugs to display names:
  ```typescript
  // src/data/tags.ts
  export const TAG_METADATA = {
    'scala': { name: 'Scala', slug: 'scala' },
    'functional-programming': { name: 'Functional Programming', slug: 'functional-programming' },
    // ... all 114 tags
  }
  ```

**6. Handle Images**
- Copy `/images/` directory to `public/images/`
- Profile images available:
  - `blogprofile.png` (main)
  - `blogprofiletransparent.png` (with alpha)
- Update image references in posts
- Optimize images (WebP conversion, compression)

**7. Handle Special Content**
- **Interactive Charts:** Posts with embedded JavaScript visualizations
  - Identify posts with `<script>` tags
  - Consider converting to Astro components or keeping inline
- **Code Blocks:** Preserve syntax highlighting language tags
- **ASCII Art:** Ensure monospace formatting in code blocks
- **Org-mode Content:** Use as reference; converted posts in `_posts/`

**8. Migration Script (Node.js)**
```javascript
// migrate-posts.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = './temp-migration/_posts';
const OUTPUT_DIR = './src/content/posts';

// Read all post files
const files = fs.readdirSync(POSTS_DIR);

files.forEach(file => {
  const filePath = path.join(POSTS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract date from filename
  const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : null;

  // Parse frontmatter
  const { data, content: postContent } = matter(content);

  // Create new frontmatter
  const newFrontmatter = {
    title: data.title,
    date: date,
    tags: data.tags || [],
    description: extractFirstParagraph(postContent)
  };

  // Write new file
  const outputPath = path.join(OUTPUT_DIR, file.replace('.html', '.md'));
  const output = matter.stringify(postContent, newFrontmatter);
  fs.writeFileSync(outputPath, output);
});
```

**9. Manual Review Checklist**
- [ ] All 102 posts converted successfully
- [ ] Frontmatter complete and valid
- [ ] Images display correctly
- [ ] Code blocks render properly
- [ ] Internal links work
- [ ] Special content (charts, diagrams) functional
- [ ] Tags match existing tag list (114 tags)

**10. Handle Edge Cases**
- **Popular tag:** 13 posts have this tag (from _config.yml)
- **Duplicate tags:** Handle variants (game-dev vs gamedev)
- **External links:** Verify YouTube, GitHub links still valid
- **Historical content:** Very old posts (2007) may need extra formatting care

#### URL Structure Mapping

**Option A: Maintain Jekyll URLs (Recommended for SEO)**
- Old: `/YYYY/MM/DD/post-title.html`
- New: Same structure via Astro routing
- Configure in `astro.config.mjs` with custom routing
- Requires rewrite rules or slug generation

**Option B: Modern Clean URLs**
- Old: `/YYYY/MM/DD/post-title.html`
- New: `/posts/post-title/` or `/blog/post-title/`
- Simpler structure but requires redirects
- Create `_redirects` file for Netlify/Vercel

**Option C: Date-based Clean URLs**
- Old: `/YYYY/MM/DD/post-title.html`
- New: `/posts/YYYY-MM-DD-post-title/`
- Keeps date information in URL
- Easier migration path

**Recommendation:** Start with Option C for easier migration, then implement redirects from old URLs if needed for SEO.

### 10. Additional Features

#### RSS Feed (`rss.xml.ts`)
- Generate RSS feed from all posts
- Include title, description, date, link
- Proper XML formatting

#### Syntax Highlighting
- Configure Shiki with preferred theme
- Support for multiple languages: JavaScript, Python, Scala, C++, etc.
- Line numbers (optional)
- Highlighting specific lines (optional)

#### Reading Time
- Calculate estimated reading time
- Display on post cards and post pages

#### Search Functionality (Future Enhancement)
- Client-side search using Fuse.js
- Search by title, content, tags

#### Analytics (Optional)
- Google Analytics or privacy-friendly alternative
- Track page views, popular posts

### 11. Responsive Design

#### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### Mobile Adaptations
- Stacked layout on mobile
- Hamburger menu for navigation
- Smaller profile image
- Touch-friendly tag badges
- Readable font sizes

### 12. Performance Optimization

#### Image Optimization
- Use Astro Image component
- Lazy loading
- Responsive images
- WebP format with fallbacks

#### Build Optimization
- Minify CSS and JavaScript
- Remove unused CSS
- Compress images
- Generate static HTML for all pages

### 13. SEO & Meta Tags

#### Essential Meta Tags
- Title tag (unique per page)
- Description meta tag
- Open Graph tags for social sharing
- Twitter card tags
- Canonical URLs
- Sitemap generation

### 14. Testing Checklist

#### Functionality Testing
- [ ] All posts render correctly
- [ ] Tag pages show correct posts
- [ ] Navigation works on all pages
- [ ] Links (internal and external) work
- [ ] RSS feed validates
- [ ] Code syntax highlighting works
- [ ] Mobile responsive design

#### Content Testing
- [ ] Markdown renders properly
- [ ] Images display correctly
- [ ] Code blocks format correctly
- [ ] Lists and blockquotes render
- [ ] Special characters display properly

#### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 15. Deployment

#### Build Process
```bash
npm run build
```

#### Deployment Options
1. **GitHub Pages** (to maintain existing URL)
   - Build to `docs/` or `out/` folder
   - Push to GitHub
   - Configure GitHub Pages

2. **Netlify**
   - Connect GitHub repo
   - Configure build command
   - Auto-deploy on push

3. **Vercel**
   - Import GitHub repo
   - Zero config deployment
   - Preview deployments

#### Custom Domain Setup
- Keep `justinhj.github.io` domain
- Configure DNS if using custom domain
- Set up HTTPS

### 16. Maintenance Plan

#### Regular Tasks
- Add new blog posts in markdown
- Update dependencies monthly
- Monitor build times
- Check for broken links
- Review analytics (if enabled)

#### Content Workflow
1. Write post in markdown
2. Add frontmatter
3. Place in `src/content/posts/`
4. Preview locally
5. Commit and push
6. Auto-deploy

## Implementation Phases

### Phase 1: Foundation (Week 1)
- Set up Astro project
- Configure build system
- Create base layouts
- Implement header and navigation
- Set up content collections

### Phase 2: Core Pages (Week 2)
- Homepage with post list
- Individual post pages
- Tag pages
- Popular posts page
- RSS feed

### Phase 3: Styling (Week 3)
- Implement design system
- Style all components
- Responsive design
- Typography refinement
- Code block styling

### Phase 4: Content Migration (Week 4)
- Export existing posts
- Convert to markdown
- Update frontmatter
- Test rendering
- Fix any issues

### Phase 5: Polish & Launch (Week 5)
- SEO optimization
- Performance testing
- Cross-browser testing
- Final content review
- Deploy to production

## Success Criteria

- [ ] All existing blog posts migrated successfully
- [ ] Design matches or improves upon original
- [ ] All features functional (tags, RSS, navigation)
- [ ] Mobile-responsive
- [ ] Fast load times (< 2s)
- [ ] Accessible (WCAG 2.1 AA)
- [ ] SEO optimized
- [ ] Easy to add new posts

## Future Enhancements

1. **Search Functionality**
   - Full-text search across posts
   - Filter by tags

2. **Comments System**
   - Consider Giscus (GitHub-based)
   - Or Disqus alternative

3. **Dark Mode Toggle** (Current site has this implemented)
   - Toggle button in header to switch between light/dark themes
   - Respect system preferences on initial load
   - Store user preference in localStorage
   - Smooth transitions between modes
   - Implementation approach:
     ```typescript
     // ThemeToggle.astro component
     <script>
       const theme = (() => {
         if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
           return localStorage.getItem('theme');
         }
         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
           return 'dark';
         }
         return 'light';
       })();

       if (theme === 'dark') {
         document.documentElement.classList.add('dark');
       } else {
         document.documentElement.classList.remove('dark');
       }

       window.localStorage.setItem('theme', theme);
     </script>
     ```
   - Add toggle button with sun/moon icon
   - Ensure all components support both themes

4. **Series/Collections**
   - Group related posts
   - Next/previous navigation

5. **Table of Contents**
   - Auto-generate from headings
   - Sticky sidebar on desktop

6. **Related Posts**
   - Show related posts based on tags
   - At end of each post

7. **Newsletter Integration**
   - Email subscription form
   - RSS to email service

## Notes & Important Considerations

### Repository Reference
- **Do NOT copy:** Jekyll layouts, SCSS files, existing CSS
- **Reference only:** Use for understanding design patterns and structure
- **Do copy:** Content (_posts/), images, tag metadata

### Content Creation Workflow
- Current: Org-mode (Emacs) → Export to Jekyll → GitHub Pages
- Future: Could maintain Org-mode workflow with custom export
- Alternative: Direct markdown authoring in Astro content directory

### Profile Images
Available options in `/images/`:
- `blogprofile.png` - Main profile image
- `blogprofiletransparent.png` - Profile with alpha channel (recommended)
- `bikeprofile.jpg` - Alternative profile
- `grumpyprofile.jpg` - Alternative profile
- `justinnew.png` - Another option

### Social Media Configuration
From `_config.yml`:
- Email: justinhj+blog@gmail.com (blog contact)
- Public Email: justinhj@gmail.com
- Twitter/X: @justinhj
- GitHub: justinhj
- YouTube: /c/FunctionalJustin
- LinkedIn: /in/justinheyesjones

### Tag Handling Strategy
- **Total tags:** 114 unique tags
- **Popular posts:** 13 posts tagged with "popular"
- **Tag variants:** Normalize duplicates (e.g., game-dev/gamedev/game-development)
- **Tag display names:** Map from slug to display name using tag metadata
- **Tag pages:** Generate from tag list, not from post tags (to handle all 114 tags)

### Special Content Considerations
1. **Interactive JavaScript Elements**
   - Some posts have embedded charts and visualizations
   - Example: Tokenizer post has interactive chart with buttons
   - Strategy: Keep inline or convert to Astro components

2. **Org-mode Integration**
   - Source files in `/org/` directory
   - `publish.el` contains Emacs configuration
   - Could maintain this workflow with custom export to Astro
   - Or transition fully to markdown

3. **Speaking Events Page**
   - Exists in navigation but content needs migration
   - Source from original Jekyll site

4. **Privacy Page**
   - Exists in navigation
   - Content needs migration from Jekyll site

### Build Process Considerations
- Jekyll currently uses Ruby/Bundler + Node.js for Tailwind
- Astro will be Node.js only (simpler toolchain)
- Consider GitHub Actions for automated deployment
- Maintain fast build times (102 posts shouldn't be a problem)

### SEO & Analytics
- Existing site has been indexed for years (2007-2025)
- Consider implementing redirects from old URLs
- Maintain or improve meta tags and Open Graph
- RSS feed URL should stay consistent: `/feed.xml` or `/rss.xml`

### Performance Targets
- Current site is static (fast)
- Astro should match or exceed performance
- Target: < 1s load time, 100 Lighthouse scores
- Leverage Astro's partial hydration for any interactive elements

### Accessibility
- Ensure all images have alt text
- Maintain good heading hierarchy
- Test with screen readers
- Verify keyboard navigation works

### Browser Compatibility
- Target modern browsers (last 2 versions)
- Test on Safari (Mac), Chrome, Firefox, Edge
- Mobile responsive design is critical
