import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/personal-portfolio",
  plugins: [react()],
  server: {
    port: 3000, // default is 5173
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
