import React from 'react';
import Container from '@material-ui/core/Container';

import SEO from '../components/SEO';

import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
}
