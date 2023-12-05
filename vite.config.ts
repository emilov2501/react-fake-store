import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

const proxy = {
  "/api": {
    target: "https://fakestoreapi.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
};

export default defineConfig({
  root: "./",
  build: {
    sourcemap: false,
    emptyOutDir: true,
    outDir: "dist",
  },
  publicDir: "assets",
  preview: {
    open: true,

    port: 8080,
    proxy,
  },
  server: {
    proxy,
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst" as const,
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
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
      {
        find: "assets",
        replacement: path.resolve(__dirname, "public/icons"),
      },
    ],
  },
});
