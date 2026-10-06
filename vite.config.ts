import { defineConfig } from "vite";
import { writeFileSync } from "fs";
import path from 'path'
import { fileURLToPath } from "node:url";
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { publicRoutes } from "./src/routes";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const trailingSlashSitemap = {
  name: "trailing-slash-sitemap",
  closeBundle() {
    const urls = publicRoutes.map(({ path: route }) => {
      const canonicalPath = route === "/" ? "/" : `${route}/`;
      return `    <url><loc>https://saudexglobal.com${canonicalPath}</loc></url>`;
    });
    const sitemapXml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      '</urlset>',
      '',
    ].join('\n');

    writeFileSync(path.resolve(projectRoot, "dist/sitemap.xml"), sitemapXml);
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    trailingSlashSitemap,
  ],
  base:'/',
  optimizeDeps: {
    entries: ["src/**/*.{ts,tsx}"],
    include: [
      "@emailjs/browser",
      "@gsap/react",
      "@mcp-b/global",
      "gsap",
      "lucide-react",
      "motion/react",
      "react",
      "react-dom",
      "react-helmet-async",
      "react-icons/fa",
      "react-router-dom",
      "usewebmcp",
      "web-vitals",
    ],
  },
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(projectRoot, './src'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'router-vendor': ['react-router-dom'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  server: {
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})