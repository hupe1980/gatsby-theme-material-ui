module.exports = {
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
        // stylesProvider,
        // webFontConfig
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-blog',
      options: {
        blogPath: '/'
      }
    }
  ]
};
