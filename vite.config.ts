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
  base: "./",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  server: {
    port: 3000,
    proxy,
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        icons: [
          {
            src: "/icons/burger.svg",
            type: "image/svg",
          },
          {
            src: "/icons/close.svg",
            type: "image/svg",
          },
          {
            src: "/icons/filter.svg",
            type: "image/svg",
          },
        ],
      },
      workbox: {
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
    alias: {
      'awilix': 'awilix/lib/awilix.browser',
      "@assets": path.resolve(__dirname, "public/icons"),
    },
  },
});
