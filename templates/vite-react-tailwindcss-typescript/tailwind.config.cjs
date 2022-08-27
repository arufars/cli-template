/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Figtree': ["'Figtree', sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
