const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const LandingPage = require.resolve('./src/templates/landing-page');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { landingPagePath = '/' } = pluginOptions;

  createPage({
    path: landingPagePath,
    component: LandingPage
  });
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `content`, opts.sections || `sections`)
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
