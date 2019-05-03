import React from 'react';
import { IconButtonLink, Link } from 'gatsby-theme-material-ui/components';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '../../svg-icons/github-icon';
import TwitterIcon from '../../svg-icons/twitter-icon';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function LeftLinks() {
  const classes = useStyles();

  return (
    <>
      <Link
        variant="button"
        color="textPrimary"
        to="/docs"
        className={classes.link}
      >
        Docs
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        to="/blog"
        className={classes.link}
      >
        Blog
      </Link>
    </>
  );
}
