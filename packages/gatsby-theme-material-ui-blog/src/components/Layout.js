import React from 'react';
import { ComponentProvider } from 'material-ui-mdx';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby-theme-material-ui/components';

import SEO from './seo';

import Header from './header';
import Footer from './footer';

const components = {
  a: Link
};

export default function Layout({ children }) {
  return (
    <>
      <ComponentProvider components={components}>
        <SEO />
        <Header />
        <Container maxWidth="lg">
          <main>{children}</main>
        </Container>
        <Footer />
      </ComponentProvider>
    </>
  );
}
