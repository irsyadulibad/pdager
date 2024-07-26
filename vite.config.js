import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "es2020",
    rollupOptions: {
      input: {
        main: "./src/index.html",
      },
    },
  },
});
