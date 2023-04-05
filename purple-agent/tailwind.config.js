/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "agent": {
          purple: "#5A308C",
          gray: "#D0D1D3",
          dark: "#272525"
        }
      },
      fontFamily: {
        "montserrat": "Montserrat, sans-serif"
      }
    },
  },
  plugins: [],
}

