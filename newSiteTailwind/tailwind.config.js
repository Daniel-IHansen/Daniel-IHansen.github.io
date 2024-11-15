/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'sans': ['satoshi, sans-serif'],
      'serif': ['sentient, serif'],
    },
    colors: {
      'text': '#f6f8f8',
      'background': '#262b30',
      'primary': '#e0d4c5',
      'secondary': '#bba78e',
      'accent': '#455367',
     },
     aspectRatio: {
      '4/3': '4 / 3',
     },
  },
  plugins: [],
}