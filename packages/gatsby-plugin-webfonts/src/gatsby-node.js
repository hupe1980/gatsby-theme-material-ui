import path from 'path';
import fs from 'fs-extra';

import WebFont from './web-font';

export const onPreBootstrap = async ({ store, pathPrefix }, options) => {
  const webFont = new WebFont(options);

  let css = await webFont.getCss();

  const { directory } = store.getState().program;

  const dir = path.join(directory, '.cache', 'webfonts');

  css = await webFont.downloadFonts(css, dir);

  const filePath = path.join(dir, `webfonts.css`);

  await fs.outputFile(filePath, css);

  const filter = src => path.extname(src) !== '.css';

  await fs.copy(dir, `./public/webfonts`, { filter });
};
