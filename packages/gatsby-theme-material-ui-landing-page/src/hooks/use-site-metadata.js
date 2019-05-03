import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          lang
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
