import React from 'react';
import Img from 'gatsby-image';
import { CardActionAreaLink } from 'gatsby-theme-material-ui/components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import Layout from './layout';
import MainFeaturedPost from './main-featured-post';
import Sidebar from './sidebar';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  cardGrid: {
    marginBottom: theme.spacing(3)
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

function normalizePath(path) {
  return path.replace(/\/+/g, `/`);
}

export const toPath = (blogPath, { frontmatter }) => {
  return normalizePath(`${blogPath}/${frontmatter.slug}`);
};

export default function Blog({ blogPath, featuredPosts, posts }) {
  const classes = useStyles();
  const mainFeaturedPost = featuredPosts.shift();

  return (
    <Layout>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4} className={classes.cardGrid}>
        {featuredPosts.map(post => (
          <Grid item key={post.id} xs={12} md={6}>
            <CardActionAreaLink to={toPath(blogPath, post)}>
              <Card className={classes.card}>
                <Hidden xsDown>
                  <Img
                    className={classes.cardMedia}
                    fluid={post.frontmatter.img.childImageSharp.fluid}
                  />
                </Hidden>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.frontmatter.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {new Date(post.frontmatter.datePublished).toDateString()}{' '}
                      {`${post.timeToRead} min read`}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionAreaLink>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container spacing={5} className={classes.mainGrid}>
        {posts.map(post => (
          <Grid item key={post.id} xs={12} md={8}>
            <CardActionAreaLink to={toPath(blogPath, post)}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.frontmatter.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {new Date(post.frontmatter.datePublished).toDateString()}{' '}
                      {`${post.timeToRead} min read`}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <Img
                    className={classes.cardMedia}
                    fluid={post.frontmatter.img.childImageSharp.fluid}
                  />
                </Hidden>
              </Card>
            </CardActionAreaLink>
          </Grid>
        ))}
        <Sidebar />
      </Grid>
    </Layout>
  );
}
