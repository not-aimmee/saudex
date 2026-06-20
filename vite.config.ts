import { defineConfig } from "vite";
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/aboutUs",
  "/Services",
  "/services/impo-expo",
  "/services/freight",
  "/services/distribution",
  "/services/warehousing",
  "/services/TCL",
  "/services/fmcg",
  "/services/customs",
  "/services/Supply_chain",
  "/How_it_works",
  "/Home",
  "/CTA",
  "/contact",
  "/careers",
  "/Industries",
  "/industries/cold_chain",
  "/industries/e_commerce",
  "/industries/FMCG",
  "/industries/food_beverages",
  "/industries/horeca",
  "/industries/retail",
  "/BeOurPartner",
  "/careers",
  "/Stats"
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
