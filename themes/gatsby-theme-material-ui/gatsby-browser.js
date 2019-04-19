import loadWebFont from './src/load-web-font';
import wrapWithProvider from './src/wrap-with-provider';
export const onInitialClientRender = loadWebFont;
export const wrapRootElement = wrapWithProvider;
