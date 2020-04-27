import React from "react";
import { Button } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/core/styles";

import useSiteMetadata from "../../hooks/use-site-metadata";

const useStyles = makeStyles((theme) => ({
  title: {
    lineHeight: `30px`,
    fontSize: `18px`,
    borderRadius: `3px`,
    textTransform: `none`,
    color: `inherit`,
    padding: `8px 16px`,
    "&:hover,&:focus": {
      color: `inherit`,
      background: `transparent`,
    },
  },
}));

export default function Title({ title, ...other }) {
  const { title: metaTitle } = useSiteMetadata();
  const classes = useStyles();

  return (
    <Button to="/" className={classes.title} {...other}>
      {title || metaTitle}
    </Button>
  );
}
