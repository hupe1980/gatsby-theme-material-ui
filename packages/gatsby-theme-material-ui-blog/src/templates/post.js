import { graphql } from 'gatsby';

import Post from '../components/post';

export default Post;

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
