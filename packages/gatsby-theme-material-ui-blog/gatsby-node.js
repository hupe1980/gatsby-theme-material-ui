const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const Post = require.resolve('./src/templates/post');
const Blog = require.resolve('./src/templates/blog');

function getOptions(pluginOptions) {
  const defaultOptions = {
    blogPath: '/blog',
    useFeaturedPosts: true
  };

  return {
    ...defaultOptions,
    ...pluginOptions
  };
}

exports.onCreateNode = ({ node, getNode, actions }, pluginOptions) => {
  const { createNodeField } = actions;
  const { blogPath } = getOptions(pluginOptions);

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    if (
      parent.internal.type === 'File' &&
      parent.sourceInstanceName === 'posts'
    ) {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName
      });

      if (node.frontmatter.slug) {
        const slug = path.join(blogPath, node.frontmatter.slug);

        createNodeField({
          node,
          name: `slug`,
          value: slug
        });
      }
    }
  }
};

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;

  const { blogPath } = getOptions(pluginOptions);

  const result = await graphql(`
    {
      mdxPages: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
              sourceName
            }
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
      path: node.fields.slug,
      context: node,
      component: Post
    });
  });

  createPage({
    path: blogPath,
    component: Blog
  });
};

exports.sourceNodes = async ({ actions }) => {
  const { createTypes } = actions;

  const schemaFile = path.join(__dirname, `schema.gql`);

  const typeDefs = fs.readFileSync(schemaFile).toString();

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  createResolvers({
    Query: {
      blogOptions: {
        type: `BlogOptions`,
        resolve(source, args, context, info) {
          return {
            ...getOptions(pluginOptions)
          };
        }
      }
    }
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
