import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jackcai.me",
  redirects: {
    "/writing/spotting-problems-for-auto-research.html":
      "/writing/spotting-problems-for-auto-research/",
    "/writing/stuck-agents-report.html": "/writing/stuck-agents-report/",
    "/writing/superposition-is-opinionated-noise.html":
      "/writing/superposition-is-opinionated-noise/",
  },
});
