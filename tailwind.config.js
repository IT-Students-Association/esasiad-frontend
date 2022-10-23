/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#436146",
      main2: "#4F7F5F",
      accent1: "#B2DCA2",
      accent2: "#FDDF92",
      white: "#F7F7F7",
      orange: "#D2D271",
      grey: "#C1C1C1",
      black: "#000000",
      purewhite: "#FFFFFF",
      error: "#902923",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {
      fontSize: {
        xs: "0.8em",
        s: "1em",
        base: "1.25em",
        lg: "1.563em",
        xl: "1.953em",
        "2xl": "2.441em",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
