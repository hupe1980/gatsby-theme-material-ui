import React from 'react';
import { graphql } from 'gatsby';

import Docs from '../components/docs';

export default props => {
  const {
    data: {
      allMdx: { edges }
    }
  } = props;

  const components = edges.map(edge => edge.node);

  return <Docs components={components} />;
};

export const pageQuery = graphql`
  query Components {
    allMdx(filter: { fields: { sourceName: { eq: "components" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          code {
            body
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`;
