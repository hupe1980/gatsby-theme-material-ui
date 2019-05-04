import React from 'react';

export default function Preconnect({
  disabled,
  href,
  crossOrigin = 'anonymous'
}) {
  if (disabled) return null;
  return <link rel="preconnect" href={href} crossOrigin={crossOrigin} />;
}
