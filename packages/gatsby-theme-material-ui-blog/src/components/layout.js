import React from 'react';
import { ComponentProvider } from 'material-ui-mdx';
import { Link } from 'gatsby-theme-material-ui/components';
import Container from '@material-ui/core/Container';

import SEO from './seo';

const components = {
  a: Link
};

export default function Layout({ children }) {
  return (
    <>
      <ComponentProvider components={components}>
        {/* <SEO /> */}
        <Container maxWidth="lg">{children}</Container>
      </ComponentProvider>
    </>
  );
}
