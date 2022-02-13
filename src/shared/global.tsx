import React, { ReactElement } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./theme";

import variables from "!style-loader!css-loader!sass-loader!./scss/theme.module.scss";

export const GlobalStyleWrap = ({ children }: { children: React.Component }): ReactElement => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme(variables)}>{children}</ThemeProvider>
  </StyledEngineProvider>
);
