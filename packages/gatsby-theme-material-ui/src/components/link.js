import React from "react";
import MuiLink from "@material-ui/core/Link";

import GastsbyLink from "./gatsby-link";

function Link(props) {
  return <MuiLink component={GastsbyLink} {...props} />;
}

export default Link;
