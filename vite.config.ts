import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://5.101.1.198",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
