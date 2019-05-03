const pkg = require('./package.json');

const defaultWebFontConfig = {
  fonts: {
    google: [
      {
        family: 'Roboto',
        variants: ['300', '400', '500']
      }
    ]
  }
};

module.exports = themeOptions => {
  const { stylesProvider, webFontConfig = defaultWebFontConfig } = themeOptions;

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          stylesProvider
        }
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfont`,
        options: {
          ...webFontConfig
        }
      },
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [pkg.name]
        }
      }
    ]
  };
};
