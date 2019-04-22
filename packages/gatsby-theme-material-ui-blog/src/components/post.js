import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from './layout';

function PostPage({ data: { mdx } }) {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
}

export default PostPage;
