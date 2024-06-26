/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      teal: "#2b7f94",
      lightblue: "#474e74",
      blue: "#252342",
      green: "#499b73",
      yellow: "#fde16f",
      purple: "#823982",
      white: "#ffffff"
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
