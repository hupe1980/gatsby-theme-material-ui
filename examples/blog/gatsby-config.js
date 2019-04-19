module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Material-UI`
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
