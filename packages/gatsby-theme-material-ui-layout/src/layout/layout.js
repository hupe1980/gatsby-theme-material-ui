import React from 'react';

import NProgressBar from '../components/nprogress-bar';
import SkipNav from '../components/skip-nav';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <NProgressBar />
      <SkipNav>Skip to content</SkipNav>
      {/* <Banner /> */}
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
