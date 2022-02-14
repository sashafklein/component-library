const path = require("path");

// Location of root node_modules
const modulesDir = path.join(process.cwd(), "node_modules");

//SEE: https://github.com/storybookjs/storybook/pull/13300#issuecomment-756675536
const updateEmotionAliases = config => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@emotion/core": path.join(modulesDir, "@emotion/react"),
      "@emotion/styled": path.join(modulesDir, "@emotion/styled"),
      "@emotion/styled-base": path.join(modulesDir, "@emotion/styled"),
      "emotion-theming": path.join(modulesDir, "@emotion/react"),
      "@shared": path.join(__dirname, "../src/shared"),
      "@stories": path.join(__dirname, "../src/stories"),
      "@src": path.join(__dirname, "../src"),
      "@scss": path.join(__dirname, "../src/shared/scss"),
    },
  },
});

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  managerWebpack: updateEmotionAliases,
  webpackFinal: updateEmotionAliases,
};
