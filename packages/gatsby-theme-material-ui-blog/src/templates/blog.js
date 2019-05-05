import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../components/blog';

export default props => {
  const {
    data: {
      allMdx: { edges }
    }
  } = props;

  const posts = edges
    .filter(({ node }) => !node.frontmatter.featured)
    .map(edge => edge.node);

  const featuredPosts = edges
    .filter(({ node }) => node.frontmatter.featured)
    .map(edge => edge.node);

  return <Blog featuredPosts={featuredPosts} posts={posts} />;
};

export const pageQuery = graphql`
  query Posts {
    allMdx(
      filter: { fields: { sourceName: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 150)
          timeToRead
          frontmatter {
            datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
            featured
            title
            slug
            imgAlt
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
