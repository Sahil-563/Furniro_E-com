/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1025px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
