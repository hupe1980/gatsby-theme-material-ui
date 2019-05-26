import React from "react";
import Layout from "./layout";

export default function wrapWithLayout({ element, props }) {
  console.log(`Element`, element);
  return <Layout {...props}>{element}</Layout>;
}
