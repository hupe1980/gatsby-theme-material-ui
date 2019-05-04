import url from 'url';
import path from 'path';
import fs from 'fs-extra';
import axios from 'axios';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

export async function parseCss(cssString, { fontDisplay = 'swap' }) {
  const root = postcss.parse(cssString);

  const cssObject = postcssJs.objectify(root);

  if (cssObject['@font-face']) {
    cssObject['@font-face'] = cssObject['@font-face'].reduce((acc, obj) => {
      const srcs = obj.src.split(',');

      const index = acc.findIndex(element => {
        return element.src.split(',')[0] === srcs[0];
      });

      // merge urls
      if (index > -1) {
        acc[index].src = `${acc[index].src}, ${srcs[2]}`;
        return acc;
      }

      obj.fontDisplay = fontDisplay;
      acc.push(obj);
      return acc;
    }, []);
  }

  const { css } = await postcss().process(cssObject, {
    parser: postcssJs,
    from: undefined
  });

  return css;
}

export async function downloadCss(url, userAgent, headers = {}) {
  const response = await axios.get(url, {
    headers: {
      accept: 'text/css,*/*;q=0.1',
      'User-Agent': userAgent,
      ...headers
    }
  });

  return response.data;
}

export async function downloadFont(url, headers = {}) {
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    headers
  });

  return response.data;
}

export async function replaceFonts(css, dir) {
  const regex = /url\((.+?)\)/gi;
  const fontUrls = css
    .match(regex)
    .map(urlString => urlString.replace(regex, '$1'));

  const fontSrcs = await Promise.all(
    fontUrls.map(async fontUrl => {
      const { pathname } = url.parse(fontUrl);
      const filePath = path.join(dir, pathname);

      const font = await downloadFont(fontUrl);

      await fs.outputFile(filePath, font);

      return `/static/webfonts/${pathname}`;
    })
  );

  fontSrcs.forEach((src, index) => (css = css.replace(fontUrls[index], src)));

  return css;
}
