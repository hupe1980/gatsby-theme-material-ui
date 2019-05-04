import path from 'path';
import fs from 'fs-extra';

import createOptions from './create-options';
import webFonts from './web-fonts';

export const onPreBootstrap = async ({ store, pathPrefix }, pluginOptions) => {
  const { directory } = store.getState().program;

  const cacheFolder = path.join(directory, '.cache', 'webfonts');

  const options = createOptions({ ...pluginOptions, cacheFolder });

  await webFonts(options);

  const filter = src => path.extname(src) !== '.css';

  await fs.copy(cacheFolder, `./public/static/webfonts`, { filter });
};
