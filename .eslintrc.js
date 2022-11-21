module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": 2,
  },
};
