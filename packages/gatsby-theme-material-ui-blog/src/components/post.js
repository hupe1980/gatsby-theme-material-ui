import React from 'react';

import Layout from './layout';

function PostPage({ content, title }) {
  return (
    <Layout>
      <h1>{title}</h1>
      {content}
    </Layout>
  );
}

export default PostPage;
