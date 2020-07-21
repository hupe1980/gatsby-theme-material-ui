import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  skipLink: {
    border: 0,
    color: theme.palette.text.primary,
    clip: `rect(0 0 0 0)`,
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    overflow: `hidden`,
    position: `absolute`,
    zIndex: 100,
    '&:focus': {
      padding: theme.spacing(2),
      position: `fixed`,
      top: theme.spacing(4),
      left: theme.spacing(4),
      background: theme.palette.background.default,
      textDecoration: `none`,
      width: `auto`,
      height: `auto`,
      clip: `auto`,
    },
  },
}));

export default function SkipNav(props) {
  const classes = useStyles();
  return <Link className={classes.skipLink} to={`#maincontent`} {...props} />;
}
