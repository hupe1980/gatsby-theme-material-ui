const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const Album = require.resolve('./src/templates/album');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { albumPath = '/album' } = pluginOptions;

  createPage({
    path: albumPath,
    component: Album
  });
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, `content`, opts.cards || `cards`)];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
