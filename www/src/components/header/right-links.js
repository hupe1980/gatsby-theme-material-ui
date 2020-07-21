import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from 'gatsby-theme-material-ui';

import GitHubIcon from '../../svg-icons/github-icon';
import TwitterIcon from '../../svg-icons/twitter-icon';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.common.white,
  },
}));

export default function RightLinks() {
  const classes = useStyles();

  return (
    <>
      <IconButton
        href="https://github.com/hupe1980/gatsby-theme-material-ui"
        title="GitHub"
      >
        <GitHubIcon className={classes.icon} />
      </IconButton>
      <IconButton href="https://twitter.com/hupe1980" title="Twitter">
        <TwitterIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
