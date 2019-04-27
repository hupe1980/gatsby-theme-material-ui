module.exports = {
  siteMetadata: {
    title: `gatsby-theme-material-ui`,
    description: `Gatsby theme for Material-UI`,
    social: {
      twitter: '',
      github: 'https://github.com/hupe1980/gatsby-theme-material-ui',
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
      resolve: 'gatsby-theme-material-ui-landing-page',
      options: {
        landingPagePath: '/'
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-blog',
      options: {
        blogPath: '/blog',
        useFeaturedPosts: false
      }
    },
    {
      resolve: 'gatsby-theme-material-ui-docs',
      options: {
        docsPath: '/docs'
      }
    }
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false
      }
    },
    `gatsby-plugin-netlify`
  ]
};
