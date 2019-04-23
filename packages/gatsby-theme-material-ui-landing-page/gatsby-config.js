const path = require(`path`);

module.exports = themeOptions => {
  return {
    plugins: [
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(`content`, `banner`),
          name: `banner`
        }
      }
    ]
  };
};
