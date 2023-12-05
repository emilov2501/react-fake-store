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
        manualChunks: {
          reactVendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  server: {
    proxy,
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },

  plugins: [
    VitePWA({
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg}"],
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
      include: "**/*.svg",
    }),
    react({
      tsDecorators: true,
    }),
  ],
  resolve: {
    alias: {
      awilix: "awilix/lib/awilix.umd",
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
