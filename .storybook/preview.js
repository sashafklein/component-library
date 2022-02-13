import React from "react";
import { GlobalStyleWrap } from "../src/shared/global";

export const decorators = [
  Story => (
    <GlobalStyleWrap>
      <Story />
    </GlobalStyleWrap>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
