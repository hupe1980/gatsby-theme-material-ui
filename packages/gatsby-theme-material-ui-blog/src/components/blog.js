import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Layout from './layout';
import MainFeaturedPost from './main-featured-post';
import Preview from './preview';
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

export default function Blog({ featuredPosts, posts }) {
  const classes = useStyles();
  const mainFeaturedPost = featuredPosts.shift();

  return (
    <Layout>
      {mainFeaturedPost && <MainFeaturedPost post={mainFeaturedPost} />}
      <Grid container spacing={4} className={classes.cardGrid}>
        {featuredPosts.map(post => (
          <Grid item key={post.id} xs={12} md={6}>
            <Preview post={post} />
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container spacing={5} className={classes.mainGrid}>
        {posts.map(post => (
          <Grid item key={post.id} xs={12} md={8}>
            <Preview post={post} />
          </Grid>
        ))}
        <Sidebar />
      </Grid>
    </Layout>
  );
}
