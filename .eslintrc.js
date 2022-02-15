const errorOnProd = process.env.NODE_ENV === "production" ? 2 : 1;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": 2,

    "import/order": "error",
    "import/no-unresolved": 0,

    // Warn locally and throw errors on production
    "no-debugger": errorOnProd,
    "no-console": errorOnProd,
  },
  globals: {
    module: "readonly",
    process: "readonly",
    jest: "readonly",
  },
};
