/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.html", "./**/*.js", "!./node_modules/**"],
  theme: {
    fontFamily: {
      sans: ["satoshi, sans-serif"],
      serif: ["sentient, serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      text: "#f6f8f8",
      background: "#262b30",
      primary: "#e0d4c5",
      secondary: "#cfba9f",
      accent: "#d0a931",
    },
    aspectRatio: {
      "4/3": "4 / 3",
      square: "1 / 1",
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
    },
  },
  plugins: [],
};
