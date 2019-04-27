module.exports = {
  siteMetadata: {
    title: `Your Site-Title`,
    description: `Your Site-Description`,
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
      resolve: 'gatsby-theme-material-ui-layout',
      options: {}
    },
    {
      resolve: 'gatsby-theme-material-ui-blog',
      options: {
        blogPath: '/'
      }
    }
  ]
};
