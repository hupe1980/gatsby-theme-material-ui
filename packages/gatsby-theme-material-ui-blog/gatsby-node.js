const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const { createFilePath } = require('gatsby-source-filesystem');

const Post = require.resolve('./src/templates/post');
const Blog = require.resolve('./src/templates/blog');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { blogPath = '/blog' } = pluginOptions;

  const toPostPath = node => {
    return path.join(blogPath, node.frontmatter.slug);
  };

  const result = await graphql(`
    {
      mdxPages: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    throw new Error(`Could not query posts`, result.errors);
  }

  const { mdxPages } = result.data;
  const posts = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === 'posts'
  );

  // Create posts pages
  posts.forEach(({ node }) => {
    createPage({
      path: toPostPath(node),
      context: node,
      component: Post
    });
  });

  createPage({
    path: blogPath,
    context: {
      blogPath
    },
    component: Blog
  });
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [
    //path.join(program.directory, `pages`),
    path.join(program.directory, `content`, opts.posts || `posts`)
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
