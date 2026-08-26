# Zhice Tang · Academic Homepage

A lightweight academic homepage built with HTML, CSS, and vanilla JavaScript and published with GitHub Pages.

## Structure

```text
.
├── index.html                     # homepage content
├── style.css                     # shared visual system and responsive layout
├── script.js                     # navigation, theme, and blog index rendering
├── assets/
│   ├── docs/Zhice_Tang_cv.pdf    # current CV
│   └── images/profile.jpg        # profile photo
├── data/posts.json               # blog index
└── blog/
    ├── index.html                # blog landing page
    ├── README.md                 # publishing instructions
    └── posts/_template.html      # copy for a new post
```

## Add a blog post

Follow [`blog/README.md`](blog/README.md). A post is a standalone HTML file plus one entry in `data/posts.json`. The homepage automatically displays the latest three entries; `/blog/` displays the full list.

## Preview locally

Start any static file server from the repository root. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

The repository is configured as the `Townzc.github.io` user site. Pushing the root-level static files to `main` updates [townzc.github.io](https://townzc.github.io/).
