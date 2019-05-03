import React from 'react';
import fs from 'fs';
import path from 'path';

import Preconnect from './components/preconnect';
import Preload from './components/preload';
import Css from './components/css';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const css = fs.readFileSync(
    path.join('./.cache', 'webfonts', 'webfonts.css')
  );

  setHeadComponents([
    // <Preconnect
    //   key="webFontsPreconnectGoogleFonts"
    //   href="https://fonts.googleapis.com"
    // />,
    <Preload key="webFontsPreload" />,
    <Css key="webFontsCss" css={css} />
  ]);
};
