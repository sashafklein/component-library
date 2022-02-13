import React, { ReactElement } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./theme";

export const GlobalStyleWrap = ({ children }: { children: React.Component }): ReactElement => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
