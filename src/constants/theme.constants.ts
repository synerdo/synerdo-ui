"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    general: Record<string, string | number>;
  }

  interface ThemeOptions {
    general: Record<string, string | number>;
  }

  interface Palette {
    white: Record<string, string>;
    black: Record<string, string>;
    gray: Record<string, string>;
  }

  interface PaletteOptions {
    white: Record<string, string>;
    black: Record<string, string>;
    gray: Record<string, string>;
  }
}

export const THEME = responsiveFontSizes(
  createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
    },
    colorSchemes: {
      light: {
        palette: {
          white: {
            5: "rgba(255, 255, 255, 0.05)",
            10: "rgba(255, 255, 255, 0.1)",
            20: "rgba(255, 255, 255, 0.2)",
            30: "rgba(255, 255, 255, 0.3)",
            40: "rgba(255, 255, 255, 0.4)",
            80: "rgba(255, 255, 255, 0.8)",
            100: "#fff",
          },
          black: {
            5: "rgba(0, 0, 0, 0.05)",
            10: "rgba(0, 0, 0, 0.1)",
            20: "rgba(0, 0, 0, 0.2)",
            30: "rgba(0, 0, 0, 0.3)",
            40: "rgba(0, 0, 0, 0.4)",
            80: "rgba(0, 0, 0, 0.8)",
            100: "#000",
          },
          gray: {
            800: "#343434",
          },
        },
      },
      dark: {},
    },
    general: {
      containerWidth: 1400,
    },
    typography: {
      fontFamily: "var(--font-montserrat), 'Roboto', sans-serif",
      h1: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "3rem",
        fontWeight: "600",
      },
      h2: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2.75rem",
        fontWeight: "600",
      },
      h3: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2.5rem",
        fontWeight: "600",
      },
      h4: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "2rem",
        fontWeight: "600",
      },
      h5: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "1.5rem",
        fontWeight: "600",
      },
      h6: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontSize: "1.25rem",
        fontWeight: "600",
      },
      subtitle1: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontWeight: "600",
      },
      subtitle2: {
        fontFamily: "var(--font-poppins), 'Roboto', sans-serif",
        fontWeight: "600",
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
