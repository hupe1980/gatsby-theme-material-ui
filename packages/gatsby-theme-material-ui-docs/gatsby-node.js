const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const Docs = require.resolve('./src/templates/docs');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { docsPath = '/docs' } = pluginOptions;

  createPage({
    path: docsPath,
    component: Docs
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    if (
      parent.internal.type === 'File' &&
      parent.sourceInstanceName === 'components'
    ) {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName
      });
    }
  }
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, `content`, opts.docs || `docs`)];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
