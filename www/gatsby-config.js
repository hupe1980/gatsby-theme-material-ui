module.exports = {
  siteMetadata: {
    title: `Your Site-Title`,
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
  plugins: [`gatsby-plugin-nprogress`, `gatsby-plugin-netlify`]
};
