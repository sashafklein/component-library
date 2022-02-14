import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import { theme } from "./shared/theme";
import { mockVariables } from "./mockVariables";

export const render = children => {
  return rtlRender(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(mockVariables)}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
