# Private Notes: Drafts Setup and Repo Visibility

## Drafts Workflow

- All draft blog posts are written in the `drafts/` folder (in Markdown).
- This folder is **local-only** and is excluded from Git via `.gitignore`.
- ✅ Safe from being pushed to GitHub
- ✅ Safe from being published on GitHub Pages
- To publish a post, move it from `drafts/` to `_posts/` and rename it:
  `YYYY-MM-DD-title.md`

---

## Preview Site Locally

Run this to preview the blog locally without drafts:

```bash
bundle exec jekyll serve


You can view the site at: http://localhost:4000
