import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
