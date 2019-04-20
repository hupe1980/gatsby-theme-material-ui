const path = require(`path`);

module.exports = themeOptions => {
  const { stylesProvider, webFontConfig } = themeOptions;

  return {
    siteMetadata: {
      title: `Your Site-Title`,
      social: {
        twitter: '',
        github: '',
        instagram: ''
      }
    },
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
