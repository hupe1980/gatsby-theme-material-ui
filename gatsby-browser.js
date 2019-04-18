import WebFont from 'webfontloader';
import wrapWithProvider from './wrap-with-provider';

const defaultConfig = {
  google: {
    families: ['Roboto:400,500,700']
  }
};

export const onInitialClientRender = (_, themeOptions) => {
  const config = { ...defaultConfig, ...themeOptions.webFontConfig };
  WebFont.load(config);
};

export const wrapRootElement = wrapWithProvider;
