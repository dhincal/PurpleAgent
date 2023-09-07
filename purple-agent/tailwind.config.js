/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        agent: {
          purple: "#5A308C",
          orange: "#EB8B1A",
          gray: "#D0D1D3",
          dark: "#272525",
        },
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
