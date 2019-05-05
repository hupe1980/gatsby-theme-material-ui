import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import BackgroundImage from 'gatsby-background-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function HeroLayout({ children }) {
  const classes = useStyles();

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "hero-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 75) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <Paper
            component="section"
            className={classes.root}
            elevation={0}
            square
          >
            {/* <BackgroundImage
            Tag="section"
            className={classes.root}
            fluid={imageData}
            backgroundColor={`#040e18`}
          > */}
            <Container className={classes.container}> {children}</Container>
            {/* </BackgroundImage> */}
          </Paper>
        );
      }}
    />
  );
}
