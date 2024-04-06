/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
    colors:{
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      "primary":"#58ACAD",
      "gradient1":"#0B1521",
      "gradient2":"#002047",
    }
  },
  plugins: [],
}