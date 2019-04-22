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
      resolve: 'gatsby-theme-material-ui-landing-page',
      options: {
        landingPagePath: '/'
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-album',
      options: {
        albumPath: '/features'
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-blog',
      options: {
        blogPath: '/blog'
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-pricing',
      options: {
        pricingPath: '/pricing'
      }
    }
  ]
};
