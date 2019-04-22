const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const Pricing = require.resolve('./src/templates/pricing');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { pricingPath = '/pricing' } = pluginOptions;

  createPage({
    path: pricingPath,
    component: Pricing
  });
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, `content`, opts.tiers || `tiers`)];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
