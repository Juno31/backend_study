module.exports = {
    env: {
      node: true,
    },
    extends: ["plugin:prettier/recommended", "eslint:recommended"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
    },
  };
  