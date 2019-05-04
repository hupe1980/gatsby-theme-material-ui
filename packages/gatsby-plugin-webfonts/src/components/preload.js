import React from 'react';
import globby from 'globby';

export default function Preload({
  disabled,
  format = 'woff2',
  crossOrigin = 'anonymous',
  pathPrefix = ''
}) {
  if (disabled) return null;

  const files = globby.sync(`./public/webfonts/**/*.${format}`);

  const preloads = files.map((file, key) => (
    <link
      key={`webfonts${key}`}
      rel="preload"
      as="font"
      type={`font/${format}`}
      crossOrigin={crossOrigin}
      href={file.replace(`./public`, pathPrefix)}
    />
  ));

  return <>{preloads}</>;
}
