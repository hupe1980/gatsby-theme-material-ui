import React from 'react';
import { Link } from 'gatsby-theme-material-ui/components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <nav>
      <Link
        variant="button"
        color="textPrimary"
        to="/features"
        className={classes.link}
      >
        Features
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        to="/pricing"
        className={classes.link}
      >
        Pricing
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        to="/blog"
        className={classes.link}
      >
        Blog
      </Link>
    </nav>
  );
}
