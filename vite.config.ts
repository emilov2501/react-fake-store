import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

const proxy = {
  "/api": {
    target: "https://fakestoreapi.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
};

export default defineConfig({
  build: {
    sourcemap: false,
    emptyOutDir: true,
  },
  preview: {
    open: true,

    port: 8080,
    proxy,
  },
  server: {
    proxy,
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
  resolve: {
    alias: [
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
});
