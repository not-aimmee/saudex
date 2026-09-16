import { defineConfig } from "vite";
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/Contact",
  "/industries/cold_chain",
  "/industries/e_commerce",
  "/industries/FMCG",
  "/industries/food_beverages",
  "/industries/horeca",
  "/industries/retail",
  "/services/customs",
  "/services/distribution",
  "/services/fmcg",
  "/services/freight",
  "/services/impo-expo",
  "/services/Supply_chain",
  "/services/TCL",
  "/services/warehousing",
  "/aboutUs",
  "/careers",
  "/BeOurPartner",
  "/privacy_policy",
  "/terms_of_service",
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
  build: {
    // react-snap's bundled Puppeteer runs an old Chromium that can't parse
    // optional chaining (?.) or nullish coalescing (??). Targeting es2015
    // makes esbuild transpile those away in both app code and node_modules deps.
    target: 'es2015',
  },
})