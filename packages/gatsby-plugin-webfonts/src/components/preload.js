import React from 'react';
import globby from 'globby';

export default function Preload({
  format = 'woff2',
  crossOrigin = 'anonymous'
}) {
  const files = globby.sync(`./public/webfonts/**/*.${format}`);
  const preloads = files.map((file, key) => (
    <link
      key={`webfonts${key}`}
      rel="preload"
      as="font"
      type={`font/${format}`}
      crossOrigin={crossOrigin}
      href={file}
    />
  ));

  return <>{preloads}</>;
}
