import React, { ReactElement } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import "!style-loader!css-loader!sass-loader!@scss/global.scss";

export const GlobalStyleWrap = ({ children }: { children: React.Component }): ReactElement => (
  <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
);
