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
        "orange-300": "#ef7c3c",
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
        "subbanner-shadow": "-6px 12px #033E45",
        "sectionheading-shadow": "-10px 10px 0px 0px #033E45"
      },
      spacing: {
        '42': '42px',
        '100':'100px',
        '400': '400px',
        '90vh': '90vh',
      },
      maxWidth: {
        'mobile': '97vw',
        'tablet': '98vw',
        'desktop': '99vw',
        '1280': '1280px',
        'bodycontent-container': '670px',
        'lineup': '50rem',
      },
      backgroundImage: {
        'section-bg': "url('/src/assets/images/section-bg.webp')",
        'hero-bg': "url('/src/assets/images/heroBanner.webp')"
      },
      lineHeight: {
        '150' : '27px',
      },
      minHeight: {
        'TicketsThankyou': 'calc(100vh - 200px)',
      },
      height: {
        'mobileMenu': 'calc(100vh - 100px)',
      }
    },
    },
  plugins: [],
  
};
