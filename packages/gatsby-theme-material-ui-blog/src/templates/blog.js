import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../components/blog';

export default props => {
  const {
    pageContext,
    data: {
      allMdx: { edges }
    }
  } = props;

  const { blogPath } = pageContext;

  const posts = edges
    .filter(
      ({ node }) =>
        node.parent.sourceInstanceName === 'posts' && !node.frontmatter.featured
    )
    .map(edge => edge.node);

  const featuredPosts = edges
    .filter(
      ({ node }) =>
        node.parent.sourceInstanceName === 'posts' && node.frontmatter.featured
    )
    .map(edge => edge.node);

  return (
    <Blog blogPath={blogPath} featuredPosts={featuredPosts} posts={posts} />
  );
};

export const pageQuery = graphql`
  query PostList {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          code {
            body
          }
          timeToRead
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
            featured
            title
            slug
            imgAlt
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
