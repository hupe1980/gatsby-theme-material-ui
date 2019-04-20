import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

export default function SEO() {
  const { title } = useSiteMetadata();

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
