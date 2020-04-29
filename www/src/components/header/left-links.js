import React from "react";
import { Link } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.common.white,
  },
}));

export default function LeftLinks() {
  const classes = useStyles();

  return (
    <>
      <Link
        variant="button"
        color="textPrimary"
        to="/docs"
        className={classes.link}
      >
        Docs
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        to="/blog"
        className={classes.link}
      >
        Blog
      </Link>
    </>
  );
}
