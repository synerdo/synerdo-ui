"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

export const THEME = responsiveFontSizes(
  createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
    },
    colorSchemes: {
      light: {},
      dark: {},
    },
    typography: {
      fontFamily: "var(--font-montserrat), 'Roboto', sans-serif",
      h1: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "3rem",
        fontWeight: "700",
      },
      h2: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2.75rem",
        fontWeight: "700",
      },
      h3: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2.5rem",
        fontWeight: "700",
      },
      h4: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2rem",
        fontWeight: "700",
      },
      h5: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "1.5rem",
        fontWeight: "700",
      },
      h6: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "1.25rem",
        fontWeight: "700",
      },
      subtitle1: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontWeight: "700",
      },
      subtitle2: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontWeight: "700",
      },
      button: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "1rem",
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            padding: "10px 20px",
          },
        },
        defaultProps: {
          disableElevation: true,
          variant: "contained",
        },
      },
    },
  })
);
