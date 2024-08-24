import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ["ru/index"]: resolve(__dirname, "ru/index.html"),
      },
    },
  },
});
