import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    // Set port and open browser automatically (optional)
    port: 3000, // default is 5173
  },
  build: {
    // Specify build target and output directory (optional)
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for easier import paths
    },
  },
});
