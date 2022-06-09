import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// esta base se de usar para el deploy github pages
// base: "/ts-react-use-context-api/",

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
