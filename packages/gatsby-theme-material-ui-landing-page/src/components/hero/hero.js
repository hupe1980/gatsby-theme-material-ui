import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import HeroLayout from './hero-layout';
import Header from './header';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 200
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
      <Header>{header}</Header>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        The fastest way to build server-side rendered Material-UI websites
      </Typography>
      <Button
        color="secondary"
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
