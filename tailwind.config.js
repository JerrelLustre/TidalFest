// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-100": "#fff8ef",
        "pale-200": "#ffeed4",
        "yellow-100": "#f4bb15",
        "orange-100": "#ef693c",
        "orange-200": "#ffa573",
        "red-100": "#f04346",
        "red-200": "#ff797b",
        "jade-100": "#067d7d",
        "jade-200": "#59afaa",
        "jade-300": "#033e45",
        "blue-100": "#67d9d2",
        "black": "#222222",
        "white": "#fbfbfb"
      },
      fontSize: {
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem"
      },
      fontFamily: {
        "montserrat": "Montserrat",
      },
      boxShadow: {
        "image-shadow": "-10px 10px 0px 0px rgba(239,187,36,1)",
        "container-shadow": "-5px 5px 0px 5px rgba(3,62,69,1)",
        "btn-shadow": "-10px 12px 0px -2px rgba(0,0,0,0.25)",
        "heading-shadow": "-10px 12px 0px 10px rgba(3,62,69,1)"
      },
      borderRadius: {
        "rounded-xl": false,
      },
    },
    },
  plugins: [],
});
