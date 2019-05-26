import React from "react";
import { Title } from "gatsby-theme-material-ui-layout/components";

import AppBar from "./app-bar";
import LeftLinks from "./left-links";
import RightLinks from "./right-links";

export default function Header() {
  return (
    <AppBar
      title={<Title />}
      leftLinks={<LeftLinks />}
      rightLinks={<RightLinks />}
    />
  );
}
