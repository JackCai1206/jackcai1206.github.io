# Jack Cai

Personal research site and writing archive, built with Astro.

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Writing

Posts are self-contained HTML files in `public/writing/`. Add each report's
listing metadata to `src/data/writing.ts`.

## Production

```bash
npm run check
npm run build
```

GitHub Actions deploys the generated site to GitHub Pages on pushes to `main`.