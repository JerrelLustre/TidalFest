import { createTheme } from "@mui/material";
import "@fontsource/inter";
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import '@fontsource/permanent-marker';

export const theme = createTheme({

    palette: {
        pale100: {
            main: "#FFF8EF"
        },
        pale200: {
            main: "#FFEED4"
        },
        yellow100: {
            main: "#F4BB15"
        },
        orange100: {
            main: "#EF693C"
        },
        orange200: {
            main: "#FFA573"
        },
        red100: {
            main: "#F04346"
        },
        red200: {
            main: "#FF797B"
        },
        jade100: {
            main: "#067D7D"
        },
        jade200: {
            main: "#59AFAA"
        },
        jade300: {
            main: "#033E45"
        },
        blue100: {
            main: "#67D9D2"
        },
        black: {
            main: "#222222"
        },
        white: {
            main: "#FBFBFB"
        }
    },

    typography: {
        fontFamily: [
            'Inter, sans-serif',
            'Montserrat, sans-serif',
            'Permanent Marker, sans-serif'
        ].join(','),
        
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '28px',
        },
        h2: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
        },
        h3: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '22px',
        },
        h4: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '20px',
        },
        p: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '18px',
        },

    },

    breakpoints: {
        values: {
            tablet: 768,
            desktop: 1280
        }
    }

})