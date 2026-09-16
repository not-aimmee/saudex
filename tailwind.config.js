/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        clash: ["Chivo", "sans-serif"],
        archivo: ["News Cycle", "sans-serif"],
      },
    },
  },
  plugins: [],
}
