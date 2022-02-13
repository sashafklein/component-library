import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import { theme } from "./shared/theme";

export const render = children => {
  const variables = {
    primary500: "#fff",
    fontFamilySansSerif: "Inter",
    breakpointXs: 400,
    breakpointS: 600,
    breakpointM: 900,
    breakpointL: 1200,
    breakpointXl: 1500,
    headerLineHeight: 100,
    black500: "#000",
    black600: "#000",
  };

  return rtlRender(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(variables)}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
