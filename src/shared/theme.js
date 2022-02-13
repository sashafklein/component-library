import { createTheme } from "@mui/material/styles";

import variables from "!style-loader!css-loader!sass-loader!./scss/theme.module.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: variables.primary500,
      light: "#E5F0FF",
    },
    error: {
      light: "#FFECEF",
      main: "#C73230",
    },
    grey: {
      dark: "#626D80",
      main: "#C1C5C9",
      light: "#F5F5F5",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: variables.fontFamilySansSerif,
  },
  breakpoints: {
    values: {
      z: 0,
      xs: parseInt(variables.breakpointXs),
      sm: parseInt(variables.breakpointS),
      md: parseInt(variables.breakpointM),
      lg: parseInt(variables.breakpointL),
      xl: parseInt(variables.breakpointXl),
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: variables.headerLineHeight,
          color: variables.black500,
        },
        h2: {
          fontSize: "1.25rem",
          fontWeight: 600,
          lineHeight: variables.headerLineHeight,
          color: variables.black500,
          WebkitFontSmoothing: "antialiased",
          textTransform: "unset",
        },
        h3: {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: variables.headerLineHeight,
          color: variables.black500,
          WebkitFontSmoothing: "antialiased",
          textTransform: "unset",
          padding: 0,
        },
        h4: {
          display: "block",
          fontSize: "0.875rem",
          fontWeight: 700,
          lineHeight: variables.headerLineHeight,
          color: variables.black600,
        },
        h5: {
          fontSize: "0.75rem",
          fontWeight: 700,
          lineHeight: variables.headerLineHeight,
          color: variables.black600,
          WebkitFontSmoothing: "antialiased",
          textTransform: "unset",
        },
        body1: {
          fontStyle: "normal",
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: variables.headerLineHeight,
          color: variables.black900,
          letterSpacing: 0,
        },
        subtitle1: {
          fontStyle: "normal",
          fontWeight: "400",
          letterSpacing: 0,
          lineHeight: "normal",
          fontSize: "1.1667rem",
          ["-webkit-font-smoothing"]: "antialiased", // eslint-disable-line no-useless-computed-key
        },
      },
    },
  },
  mixins: {},
});
