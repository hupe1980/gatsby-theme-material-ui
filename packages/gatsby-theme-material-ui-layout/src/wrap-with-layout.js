import React from 'react';
import Layout from './layout';

export default function wrapWithLayout({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
