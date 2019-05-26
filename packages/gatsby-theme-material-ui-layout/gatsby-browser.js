import NProgress from "nprogress";

import wrapWithLayout from "./src/wrap-with-layout";

export const wrapPageElement = wrapWithLayout;

export const onRouteUpdateDelayed = () => {
  NProgress.start();
};

export const onRouteUpdate = () => {
  NProgress.done();
};
