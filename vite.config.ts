import { defineConfig } from "vite";
import { writeFileSync } from "fs";
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const routes = [
  "/",
  "/industries/",
  "/services/",
  "/contact/",
  "/partner-contact/",
  "/industries/cold-chain/",
  "/industries/e-commerce/",
  "/industries/fmcg-industry/",
  "/industries/food-beverages/",
  "/industries/horeca/",
  "/industries/retail/",
  "/industries/agriculture/",
  "/services/customs/",
  "/services/distribution/",
  "/services/fmcg/",
  "/services/freight/",
  "/services/impo-expo/",
  "/services/supply-chain/",
  "/services/warehousing/",
  "/about-us/",
  "/careers/",
  "/be-our-partner/",
  "/privacy-policy/",
  "/terms-of-service/",
];

const trailingSlashSitemap = {
  name: "trailing-slash-sitemap",
  closeBundle() {
    const urls = [...new Set(routes)].map(
      (route) => `    <url><loc>https://saudexglobal.com${route}</loc></url>`,
    );
    const sitemapXml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      '</urlset>',
      '',
    ].join('\n');

    writeFileSync(path.resolve(__dirname, "dist/sitemap.xml"), sitemapXml);
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
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
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
          'react-vendor': ['react', 'react-dom'],
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
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
})