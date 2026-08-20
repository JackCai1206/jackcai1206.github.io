# Jack Cai

Personal research site and writing archive, built with Astro.

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Writing

Reports are Astro pages in `src/pages/writing/`. New reports should use
`ReportLayout.astro` and the shared components in `src/components/report/`,
then add their listing metadata to `src/data/writing.ts`.

Browser-native slide decks live in `src/pages/presentations/`. The research-agent
reset talk supports arrow-key navigation, speaker notes with `N`, fullscreen with
`F`, and print-to-PDF.

## Production

```bash
npm run check
npm run build
```

GitHub Actions deploys the generated site to GitHub Pages on pushes to `main`.