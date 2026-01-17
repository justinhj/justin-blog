## CSS Organization

The primary CSS for this Jekyll site is managed through Sass.

- **Main Sass File:** The main entry point for the site's CSS is `/css/main.scss`. This file contains variable definitions and imports the other Sass partials.

- **Sass Partials:** The `_sass` directory contains the individual Sass partials, which are organized by component (e.g., `_header.scss`, `_footer.scss`, `_layout.scss`). These files are imported into `main.scss`.

One of the key files to edit to change appearance is _sass/_base.scss, which contains the base styles for the site.

- **Org Mode CSS:** The `_orgcss/site.css` file contains styles specifically for content that has been generated from Org mode files.

- **Editing CSS:** To edit the site's CSS, you should modify the appropriate `.scss` file in the `_sass` directory and then recompile the Jekyll site. Changes to `main.scss` will also require a recompilation. The `_orgcss/site.css` file can be edited directly.

- **Jekyll Configuration:** The `_config.yml` file includes the `css` and `_orgcss` directories in the site build, ensuring that the compiled CSS is available to the site.


