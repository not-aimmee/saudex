/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // FIX: Add font-display and use system fonts as fallback
        boska: ["Boska", "system-ui", "sans-serif"],
        generalsans: ["GeneralSans", "system-ui", "sans-serif"],
        clash: ["Chivo", "system-ui", "sans-serif"],
        archivo: ["News Cycle", "system-ui", "sans-serif"],
      },
      // ADD: Optimize font-feature-settings and reduce weight variants
      fontVariationSettings: {
        'normal': 'normal',
        'italic': 'italic',
      }
    },
  },
  plugins: [],
}