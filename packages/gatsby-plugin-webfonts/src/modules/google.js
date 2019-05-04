import { downloadCss, parseCss, replaceFonts } from './utils';

const DEFAULT_API_URL = `https://fonts.googleapis.com/css`;

const defaultFontOptions = {
  fontDisplay: 'swap',
  useEncode: false,
  useLocal: true
};

export default function google({ cacheFolder, formats, formatAgents }) {
  return fonts =>
    Promise.all(
      fonts.map(async font => {
        const { fontDisplay, useLocal } = { ...defaultFontOptions, ...font };

        const requestUrl = createRequestUrl(font);

        const cssStrings = await Promise.all(
          formats.map(format => downloadCss(requestUrl, formatAgents[format]))
        );

        const css = await parseCss(cssStrings.join(''), {
          fontDisplay
        });

        return useLocal ? await replaceFonts(css, cacheFolder) : css;
      })
    );
}

export function useGooglePreconnect(options) {
  const fonts = options.fonts.google;

  if (!options.usePreconnect) return false;

  if (!fonts || fonts.length === 0) return false;

  return fonts.findIndex(font => !font.useLocal) === -1;
}

export function createRequestUrl(font) {
  if (!font.family) return null;

  let requestUrl = `${DEFAULT_API_URL}?family=${font.family.replace(
    / /g,
    '+'
  )}`;

  if (font.variants) {
    requestUrl += `:${font.variants.join(',')}`;
  }

  if (font.subsets) {
    requestUrl += `&subset=${font.subsets.join(',')}`;
  }

  if (font.text && font.text.length > 0) {
    requestUrl += `&text=${encodeURIComponent(font.text)}`;
  }

  return requestUrl;
}
