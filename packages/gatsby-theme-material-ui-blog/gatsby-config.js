const path = require(`path`);

module.exports = themeOptions => {
  const { defaultLayouts } = themeOptions;

  const themeLayouts = {
    //posts: require.resolve(`./src/templates/post`)
  };

  return {
    siteMetadata: {
      title: `Your Site-Title`,
      social: {
        twitter: '',
        github: '',
        instagram: ''
      }
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            ...themeLayouts,
            ...defaultLayouts
          },
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1035,
                sizeByPixelDensity: true
              }
            }
          ]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(`content`, `posts`),
          name: `posts`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(__dirname, `content`, `posts`)
        }
      }
    ]
  };
};
