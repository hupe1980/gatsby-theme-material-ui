import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

export default function SEO(props) {
  const { lang, title, description } = useSiteMetadata();

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
