import React from 'react';
import fs from 'fs';
import path from 'path';

import createOptions from './create-options';
import { useGooglePreconnect } from './modules/google';
import Preconnect from './components/preconnect';
import Preload from './components/preload';
import Css from './components/css';

export const onRenderBody = (
  { setHeadComponents, pathPrefix },
  pluginOptions
) => {
  const { usePreload, ...options } = createOptions(pluginOptions);

  const css = fs.readFileSync(
    path.join('./.cache', 'webfonts', 'webfonts.css')
  );

  setHeadComponents([
    <Preconnect
      key="webFontsPreconnectGoogleFonts"
      disabled={!useGooglePreconnect(options)}
      href="https://fonts.googleapis.com"
    />,
    <Preload
      key="webFontsPreload"
      disabled={!usePreload}
      pathPrefix={pathPrefix}
    />,
    <Css key="webFontsCss" css={css} />
  ]);
};
