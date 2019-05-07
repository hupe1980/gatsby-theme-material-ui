import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Post from '../components/post';

export default ({ data: { mdx } }) => {
  const content = <MDXRenderer>{mdx.code.body}</MDXRenderer>;
  return <Post title={mdx.frontmatter.title} content={content} />;
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        imgAlt
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`;
