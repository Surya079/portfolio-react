import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
  },
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      global: "node-libs-browser/mock/global",
    },
  },
 
});
