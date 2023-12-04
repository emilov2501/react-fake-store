import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: [
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://fakestoreapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: "**/*.svg",
    }),
    react({
      tsDecorators: true,
    }),
  ],
});
