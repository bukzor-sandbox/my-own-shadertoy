import { defineConfig } from "vite";

export default defineConfig({
  root: "src/pages",
  // A bad URL is a 404; the default ("spa") serves the root page instead.
  appType: "mpa",
  build: { outDir: "../../dist", emptyOutDir: true },
});
