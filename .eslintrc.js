module.exports = {
  extends: [
    `react-app`,
    `prettier/@typescript-eslint`,
    `plugin:prettier/recommended`,
  ],
  plugins: [`prettier`],
  overrides: [
    {
      files: [`**/cypress/integration/**/*`, `**/cypress/support/**/*`],
      globals: {
        cy: false,
        Cypress: false,
      },
    },
  ],
};
