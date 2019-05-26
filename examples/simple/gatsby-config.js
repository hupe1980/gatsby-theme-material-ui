module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Material-UI`,
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        // If you want to use styled components you should change the injection order.
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
  ],
};
