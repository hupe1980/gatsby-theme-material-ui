import React from 'react';
import { Link } from 'gatsby-theme-material-ui/components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  banner: {
    display: 'block',
    padding: 4,
    textAlign: 'center',
    backgroundColor: '#0a6fc2',
    color: 'white'
  }
}));

export default function SlideContent({ text, url }) {
  const classes = useStyles();

  return (
    <Typography className={classes.banner} variant="body2" noWrap>
      {text}
      {url && <Link to={url}>Read more</Link>}
    </Typography>
  );
}
