import React from 'react';

export default function Preconnect({ href, crossOrigin = 'anonymous' }) {
  return <link rel="preconnect" href={href} crossOrigin={crossOrigin} />;
}
