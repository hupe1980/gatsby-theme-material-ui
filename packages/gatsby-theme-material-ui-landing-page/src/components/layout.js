import React from 'react';

import SEO from './seo';
import LandingPage from './landing-page';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      {children}
    </>
  );
}
