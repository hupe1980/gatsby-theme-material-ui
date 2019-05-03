import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          lang
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
