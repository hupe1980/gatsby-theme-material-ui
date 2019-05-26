import React from "react";

import GatsbyLink from "../components/gatsby-link";

export default function patchBaseButtonComponent(BaseButtonComponent) {
  return props => {
    const { to, href } = props;
    const component = to || href ? GatsbyLink : `button`;

    return <BaseButtonComponent component={component} {...props} />;
  };
}
