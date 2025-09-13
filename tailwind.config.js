/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/src/**/*.{html,js,jsx,ts,tsx}",
    "./frontend/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFD1DC",
          100: "#E7B3C3",
          200: "#D49DA9",
          300: "#A17898",
          400: "#825C75",
          500: "#624056",
          light: "#b18499",   // first rectangle
          medium: "#8a5b76",  // second rectangle
          dark: "#64365b", 
        }
      }
    }
  },
  plugins: []
}
