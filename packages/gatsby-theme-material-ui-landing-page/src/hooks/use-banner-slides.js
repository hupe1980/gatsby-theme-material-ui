import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allBannerYaml {
  //       edges {
  //         node {
  //           bannerDuration
  //           slides {
  //             text
  //             url
  //             startDate
  //             endDate
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // if (
  //   !data ||
  //   !data.allBannerYaml ||
  //   !data.allBannerYaml.edges[0] ||
  //   !data.allBannerYaml.edges[0].node
  // ) {
  //   return {};
  // }
  // return data.allBannerYaml.edges[0].node;
};
