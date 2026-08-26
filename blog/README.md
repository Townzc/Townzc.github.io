# Adding a blog post

1. Copy `posts/_template.html` to `posts/your-post-slug.html`.
2. Replace the title, date, description, and article content.
3. Remove `<meta name="robots" content="noindex">` from the published post.
4. Add the post to `../data/posts.json` using this format:

```json
[
  {
    "slug": "your-post-slug",
    "title": "Your post title",
    "date": "2026-09-01",
    "description": "A short description shown on the homepage and blog index."
  }
]
```

Posts are automatically sorted newest-first. The latest three appear on the homepage, and the full list appears at `/blog/`.
