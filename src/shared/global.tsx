import React, { ReactElement } from "react";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import "!style-loader!css-loader!sass-loader!@scss/theme.scss";

// Avoid custom MUI theme in component library, using SCSS instead
const theme = createTheme();

export const GlobalStyleWrap = ({ children }: { children: React.Component }): ReactElement => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
