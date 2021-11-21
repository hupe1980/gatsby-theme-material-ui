module.exports = {
  parser: `@babel/eslint-parser`,
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
  ],
  plugins: [`prettier`, `react`],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: `./.babelrc`,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: `17.0.0`,
    },
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // fix linting on windows
    'react/prop-types': `off`,
  },
};
