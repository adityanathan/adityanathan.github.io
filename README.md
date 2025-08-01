# Eleventy Site

Static site built with Eleventy (11ty), Markdown, Nunjucks, and KaTeX.

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
```sh
npm install
```

## Development
```sh
npm run start    # eleventy --serve (watch src/, serve public/)
```
Site served at http://localhost:8080 (default). Output goes to public/.

## Build
```sh
npm run build    # eleventy
```
Optional clean:
```sh
rm -rf public && npm run build
```

## Drafts
- Pages with `draft: true` in front matter are excluded from the `notes` collection.
- Consider gating drafts entirely in production via an env flag in .eleventy.js if needed.

## KaTeX
- Markdown is rendered with markdown-it and @vscode/markdown-it-katex.
- A CDN CSS link exists in src/_includes/base.njk. You can switch to local CSS for consistency.

## Project layout
- src/: content and templates
  - _includes/: Nunjucks layouts (base.njk)
  - css/: site CSS (copied to /css)
  - notes/: notes content
- public/: generated output

## Formatting
No linter configured. Use Prettier ad-hoc:
```sh
npx prettier -c .   # check
npx prettier -w .   # write
```

## Deployment
- Build the site, then deploy the contents of public/ to your static host (e.g., GitHub Pages, Netlify, Vercel).
