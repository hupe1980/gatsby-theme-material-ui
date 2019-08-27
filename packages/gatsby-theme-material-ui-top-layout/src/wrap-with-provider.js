import React from "react";

import TopLayout from "./components/top-layout";
import theme from "./theme";

export default function wrapWithProvider({ element }) {
  return <TopLayout theme={theme}>{element}</TopLayout>;
}
