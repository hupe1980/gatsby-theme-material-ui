import React from 'react';

import Header from './header';
import Footer from './footer';
import SEO from './seo';

export default function LandingPage() {
  return (
    <>
      <SEO />
      <Header />
      <span>LandingPage</span>
      <Footer />
    </>
  );
}
