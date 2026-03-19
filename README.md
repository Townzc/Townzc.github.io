# Tang Zhice Academic Homepage

A clean, responsive, single-page academic personal website built with pure HTML, CSS, and vanilla JavaScript for direct deployment on GitHub Pages.

## Overview

This project is a fully static academic homepage designed to present Tang Zhice's background, research experience, technical profile, and contact information in a professional format suitable for professors, research advisors, and academic collaborators.

The site emphasizes:

- clear information hierarchy
- polished academic tone
- responsive layout for desktop, tablet, and mobile
- lightweight performance with no build tools or package installation
- GitHub Pages compatibility using only relative paths

## File Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- assets/
    |-- docs/
    |   `-- Tang_Zhice_CV.pdf        # add your CV here
    `-- images/
        `-- profile.jpg              # add your profile photo here
```

## How to Customize

### Change the Profile Image

1. Place your profile photo at `assets/images/profile.jpg`.
2. In `index.html`, replace the placeholder block inside the hero section with an image element such as:

```html
<img src="assets/images/profile.jpg" alt="Portrait of Tang Zhice">
```

3. Keep the `alt` text descriptive for accessibility.

### Update the CV Link

1. Place your English CV PDF at `assets/docs/Tang_Zhice_CV.pdf`.
2. In `index.html`, replace the disabled `Download CV` placeholder element with a link to `assets/docs/Tang_Zhice_CV.pdf`.
3. If your file name is different, update the `href` value accordingly.

### Edit the Content

- Update personal details, project descriptions, and contact information in `index.html`.
- Keep the section `id` values unchanged unless you also update the navigation links.
- Optional placeholder comments are already included for:
  - profile photo
  - GitHub link
  - CV PDF link
  - Google Scholar link

### Change Colors

All major design tokens are defined near the top of `style.css` inside the `:root` block.

The most important variables are:

- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-text-muted`
- `--color-accent`
- `--color-accent-strong`

You can change these values to adjust the site's overall style while keeping the layout intact.

## How to Deploy to GitHub Pages

This repository is already suitable for GitHub Pages because it is a static site with a root-level `index.html`.

### Option 1: Deploy from the Repository Root

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Save the configuration.
6. Wait for GitHub Pages to publish the site.

For a user site repository named `Townzc.github.io`, the recommended URL is:

`https://townzc.github.io/`

### Option 2: Preview Locally

You can open `index.html` directly in a browser, or use a simple local static server for testing.

Because the site uses only relative paths and vanilla JavaScript, no package installation is required.

## Suggested Next Improvements

- Add a dedicated `Publications` section when manuscripts or papers become available.
- Create standalone project detail pages for major research work.
- Add a `Blog` or `Research Notes` section for academic writing and technical reflections.
- Add a real favicon and social preview image for stronger external sharing.
- Integrate a Google Scholar link once your profile is available.

## Notes

- If you want a favicon later, add a file such as `assets/favicon.ico` and include a corresponding `<link rel="icon">` tag in `index.html`.
- If you add new pages in the future, keep all links relative so the site continues to work both locally and on GitHub Pages.