const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
//const yaml = require('js-yaml');

const LandingPage = require.resolve('./src/templates/landing-page');

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { landingPagePath = '/' } = pluginOptions;

  createPage({
    path: landingPagePath,
    component: LandingPage
  });
};

// exports.sourceNodes = (
//   { actions, store, reporter, createNodeId, createContentDigest },
//   opts
// ) => {
//   const { program } = store.getState();
//   const { createNode } = actions;
//   const bannerPath = path.join(
//     program.directory,
//     `content`,
//     opts.banner || `banner`,
//     'slides.yml '
//   );

//   if (!fs.existsSync(bannerPath)) {
//     reporter.warn(`No slides.yml`);
//     return;
//   }

//   const file = fs.readFileSync(bannerPath, 'utf8');
//   const data = yaml.safeLoad(file);
//   const nodeContent = JSON.stringify(data);
//   const nodeMeta = {
//     id: createNodeId('banner-slides'),
//     parent: null,
//     children: [],
//     internal: {
//       type: `BannerSlides`,
//       mediaType: `text/json`,
//       content: nodeContent,
//       contentDigest: createContentDigest(data)
//     }
//   };
//   createNode({ ...data, ...nodeMeta });
// };

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `content`, opts.banner || `banner`),
    path.join(program.directory, `content`, opts.sections || `sections`)
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};
