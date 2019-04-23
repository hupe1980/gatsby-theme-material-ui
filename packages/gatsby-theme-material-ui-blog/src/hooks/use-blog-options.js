import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      blogOptions {
        blogPath
        useFeaturedPosts
      }
    }
  `);

  return data.blogOptions;
};
