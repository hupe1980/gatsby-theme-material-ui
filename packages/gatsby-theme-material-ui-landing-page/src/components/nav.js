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
        href="#"
        className={classes.link}
      >
        Features
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        href="#"
        className={classes.link}
      >
        Enterprise
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        href="#"
        className={classes.link}
      >
        Support
      </Link>
    </nav>
  );
}
