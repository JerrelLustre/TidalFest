// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      screens: {
        "mobile": "390px",
        "tablet": "768px",
        "desktop": "1280px"
      },
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
        "inter": "Inter",
        "flegrei": "flegrei",
        "permanentmarker": "Permanent Marker",
      },
      boxShadow: {
        "image-shadow": "-10px 10px 0px 0px rgba(239,187,36,1)",
        "container-shadow": "-5px 5px 0px 5px rgba(3,62,69,1)",
        "btn-shadow": "-10px 12px 0px -2px rgba(0,0,0,0.25)",
        "heading-shadow": "0 8px 8px -4px rgba(3,62,69,0.3)",
        "subbanner-shadow": "-10px 12px 0px 10px #033E45;",
        "sectionheading-shadow": "-10px 10px 0px 0px #033E45;"
      },
      spacing: {
        '100':'100px'
      },
      maxWidth: {
        'mobile': '97vw',
        'tablet': '98vw',
        'desktop': '99vw'
      },
    },
    },
  plugins: [],
  
};
