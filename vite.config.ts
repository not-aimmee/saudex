import { defineConfig } from "vite";
import { writeFileSync } from "fs";
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const routes = [
  "/",
  "/industries/",
  "/Contact/",
  "/partner_contact/",
  "/industries/cold_chain/",
  "/industries/e_commerce/",
  "/industries/fmcg_industry/",
  "/industries/food_beverages/",
  "/industries/horeca/",
  "/industries/retail/",
  "/industries/agriculture/",
  "/services/customs/",
  "/services/",
  "/services/service/",
  "/services/distribution/",
  "/services/fmcg/",
  "/services/freight/",
  "/services/impo-expo/",
  "/services/Supply_chain/",
  "/services/warehousing/",
  "/aboutUs/",
  "/careers/",
  "/BeOurPartner/",
  "/privacy_policy/",
  "/terms_of_service/",
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
    // react-snap's bundled Puppeteer runs an old Chromium that can't parse
    // optional chaining (?.) or nullish coalescing (??). Targeting es2015
    // makes esbuild transpile those away in both app code and node_modules deps.
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
})