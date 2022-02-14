import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { StyledEngineProvider } from "@mui/material/styles";

export const render = children => {
  return rtlRender(<StyledEngineProvider injectFirst>{children}</StyledEngineProvider>);
};
