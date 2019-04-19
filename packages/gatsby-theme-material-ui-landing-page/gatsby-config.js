module.exports = themeOptions => {
  const { stylesProvider, webFontConfig } = themeOptions;

  return {
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-material-ui',
        options: {
          stylesProvider,
          webFontConfig
        }
      }
    ],
    plugins: [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      }
    ]
  };
};
