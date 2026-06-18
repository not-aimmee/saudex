import { defineConfig } from "vite";
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/import-export",
  "/services/freight-forwarding",
  "/services/distribution",
  "/services/warehousing",
  "/services/cold-chain",
  "/services/fmcg-distribution",
  "/services/customs-clearance",
  "/services/supply-chain-consulting",
  "/contact",
  "/track",
  "/testimonials",
  "/contact",
  "/careers",
  "/industries",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://saudexglobal.com",
      dynamicRoutes: routes,
    }),
  ],
  base:'/',
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
