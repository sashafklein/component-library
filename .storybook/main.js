const path = require("path");

// Location of root node_modules
const modulesDir = path.join(process.cwd(), "node_modules");

//SEE: https://github.com/storybookjs/storybook/pull/13300#issuecomment-756675536
const webpackFinal = config => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@emotion/core": path.join(modulesDir, "@emotion/react"),
      "@emotion/styled": path.join(modulesDir, "@emotion/styled"),
      "@emotion/styled-base": path.join(modulesDir, "@emotion/styled"),
      "emotion-theming": path.join(modulesDir, "@emotion/react"),
      // Synced to tsconfig.paths.json
      "@src": path.join(__dirname, "../src"),
      "@shared": path.join(__dirname, "../src/shared"),
      "@stories": path.join(__dirname, "../src/stories"),
      "@scss": path.join(__dirname, "../src/shared/scss"),
    },
  };

  config.module.rules.push({
    test: /\.module\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      "sass-loader",
    ],
  });

  console.log(config.module.rules);

  return config;
};

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  managerWebpack: webpackFinal,
  webpackFinal,
};
