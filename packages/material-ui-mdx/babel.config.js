const { NODE_ENV, BABEL_ENV } = process.env;

const PRODUCTION = (BABEL_ENV || NODE_ENV) === `production`;

module.exports = {
  presets: [
    [
      `@babel/env`,
      {
        loose: true,
        useBuiltIns: false,
        shippedProposals: true,
        modules: `commonjs`,
        targets: {
          browsers: [`>0.25%`, `not dead`],
        },
      },
    ],
    [`@babel/react`, { development: !PRODUCTION }],
  ],
};
