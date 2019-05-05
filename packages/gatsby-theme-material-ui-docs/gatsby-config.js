const path = require('path');

module.exports = themeOptions => {
  const { componentsLocation } = themeOptions;

  return {
    plugins: [
      {
        resolve: `gatsby-mdx`,
        options: {
          extensions: [`.md`, `.mdx`]
        }
      },
      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     name: `components`,
      //     // Location of your React components
      //     path: componentsLocation || `./src/components/`
      //   }
      // }
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(`src`, `components`),
          name: `components`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(__dirname, `src`, `components`)
        }
      }
    ]
  };
};
