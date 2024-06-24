import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#": "/src",
      "#assets": "/src/assets",
      "#components": "/src/components",
      "#config": "/src/config",
      "#hooks": "/src/hooks",
      "#pages": "/src/pages",
      "#routes": "/src/routes",
      "#services": "/src/services",
      "#store": "/src/store",
      "#styles": "/src/styles",
      "#utils": "/src/utils",
    },
  },
});
