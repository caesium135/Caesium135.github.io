# Shichen Personal Site

Personal `github.io` site built with Astro. The structure is blog-first and includes:

- `About`
- `Experience`
- `Journal`
- `Photos`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content model

- `src/content/journal`: Markdown posts with title, date, summary, draft, and tags
- `src/content/photos`: Photo entries with image metadata and caption text

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml` on pushes to `main`.
