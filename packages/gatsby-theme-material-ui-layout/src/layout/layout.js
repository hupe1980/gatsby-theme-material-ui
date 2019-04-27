import React from 'react';

import SkipLink from './skip-link';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <SkipLink to={'#maincontent'}>Skip to content</SkipLink>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
