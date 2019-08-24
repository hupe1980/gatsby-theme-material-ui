const pkg = require(`./package.json`);

const defaultWebFontsConfig = {
  fonts: {
    google: [
      {
        family: `Roboto`,
        variants: [`300`, `400`, `500`],
      },
    ],
  },
};

const defaultStylesConfig = {
  stylesProvider: {
    injectFirst: true,
  },
};

module.exports = themeOptions => {
  const {
    stylesConfig = defaultStylesConfig,
    webFontsConfig = defaultWebFontsConfig,
  } = themeOptions;

  return {
    plugins: [
      `gatsby-theme-material-ui-top-layout`,
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          ...stylesConfig,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          ...webFontsConfig,
        },
      },
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [pkg.name],
        },
      },
    ],
  };
};
