module.exports = themeOptions => {
  const { stylesProvider, webFontConfig } = themeOptions;
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          stylesProvider,
          webFontConfig
        }
      },
      `gatsby-plugin-react-helmet`,
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['gatsby-theme-material-ui']
        }
      }
    ]
  };
};
