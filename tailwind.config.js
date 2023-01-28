const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: colors.gray,
      "light-blue": "#e8fffc",
      blue: "#425bff",
      "dark-blue": "#1b186e",
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    screens: {
      md: "860px",
      lg: "1400px",
    },
  },
  plugins: [],
};
