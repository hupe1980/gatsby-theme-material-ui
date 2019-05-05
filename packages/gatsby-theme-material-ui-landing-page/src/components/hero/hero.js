import React from 'react';
import { Button } from 'gatsby-theme-material-ui/components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import HeroLayout from './hero-layout';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 200
  },
  h1: {
    fontWeight: 'bold'
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  }
}));

export default function Hero({ header, subHeader }) {
  const classes = useStyles();

  return (
    <HeroLayout>
      <Typography
        color="textPrimary"
        align="center"
        variant="h1"
        className={classes.h1}
      >
        {header}
      </Typography>
      <Typography
        color="textPrimary"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        The fastest way to build server-side rendered Material-UI websites
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        to="/docs"
      >
        Get Started
      </Button>
    </HeroLayout>
  );
}
