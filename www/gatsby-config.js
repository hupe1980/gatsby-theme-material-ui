module.exports = {
  siteMetadata: {
    lang: `en`,
    title: `gatsby-theme-material-ui`,
    description: `Gatsby theme for Material-UI`,
    siteUrl: `https://gatsby-theme-material-ui.netlify.com/`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139603907-1`,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-material-ui`,
        short_name: `GatsbyJS MUI Theme`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
