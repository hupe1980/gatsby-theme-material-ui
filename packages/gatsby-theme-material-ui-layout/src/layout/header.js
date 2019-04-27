import React from 'react';
import { Link } from 'gatsby-theme-material-ui/components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './nav';
//import SlidesBanner from './slides-banner';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            to="/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Company name
          </Link>
        </Typography>
        <Nav />
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
