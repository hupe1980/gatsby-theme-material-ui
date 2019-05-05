import React from 'react';
import Img from 'gatsby-image';
import { CardActionArea } from 'gatsby-theme-material-ui/components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';

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
  }
}));

export default function Preview({ post }) {
  const classes = useStyles();

  return (
    <CardActionArea to={post.fields.slug}>
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
    </CardActionArea>
  );
}
