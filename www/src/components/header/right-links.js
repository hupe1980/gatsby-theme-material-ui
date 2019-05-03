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

export default function RightLinks() {
  const classes = useStyles();

  return (
    <>
      <IconButtonLink
        href="https://github.com/hupe1980/gatsby-theme-material-ui"
        title="GitHub"
      >
        <GitHubIcon />
      </IconButtonLink>
      <IconButtonLink href="https://twitter.com/hupe1980" title="Twitter">
        <TwitterIcon />
      </IconButtonLink>
    </>
  );
}
