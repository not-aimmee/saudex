/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boska: ["Boska", "sans-serif"],
        generalsans: ["GeneralSans", "sans-serif"],
        clash: ["Chivo", "sans-serif"],
        archivo: ["News Cycle", "sans-serif"],
      },
    },
  },
  plugins: [],
}
