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
      resolve: 'gatsby-theme-material-ui-blog',
      options: {
        // If you want to use styled components you should change the injection order.
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    }
  ],
  plugins: [`gatsby-plugin-react-helmet`]
};
