import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect"
      key="preconnect-fonts.googleapis.com"
      href="https://fonts.googleapis.com"
    />
  ]);
};
