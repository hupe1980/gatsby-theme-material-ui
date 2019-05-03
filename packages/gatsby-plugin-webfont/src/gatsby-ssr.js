import React from 'react';
import * as fs from 'fs';
import * as path from 'path';

export const onRenderBody = ({ setHeadComponents }) => {
  const css = fs.readFileSync(
    path.join(process.cwd(), '.cache', 'webfonts', 'webfonts.css')
  );

  setHeadComponents([
    // <link
    //   rel="preconnect"
    //   key="preconnect-fonts.googleapis.com"
    //   href="https://fonts.googleapis.com"
    //   crossOrigin="anonymous"
    // />,
    <style
      key="googleFontsCss"
      type="text/css"
      dangerouslySetInnerHTML={{ __html: css }}
    />
  ]);
};
