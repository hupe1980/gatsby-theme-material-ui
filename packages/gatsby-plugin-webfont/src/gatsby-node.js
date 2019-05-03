const path = require(`path`);
const fs = require(`fs`);
const axios = require(`axios`);
const postcss = require('postcss');
const postcssJs = require('postcss-js');
const cssnano = require('cssnano');

const defaultOptions = {
  fonts: {},
  formats: ['woff2', 'woff'],
  useMinify: true,
  formatAgents: {
    eot:
      'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)',
    ttf:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8',
    woff:
      'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko',
    woff2:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
  }
};

const defaultFontConfig = {
  fontDisplay: 'swap',
  useEncode: false
};

const DEFAULT_API_URL = `https://fonts.googleapis.com/css`;

class WebFont {
  constructor(options) {
    this.options = { ...defaultOptions, ...options };
    this.options.fonts.google = this.options.fonts.google.map(font => ({
      ...defaultFontConfig,
      ...font
    }));
  }

  async getCss() {
    const urls = this.createRequestUrls();

    const cssStrings = await Promise.all(
      this.options.formats.map(format =>
        Promise.all(urls.map(url => this.requestCss(url, format)))
      )
    );

    return await this.parseCss(cssStrings.join(''));
  }

  createRequestUrls() {
    return this.options.fonts.google.map(font => {
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
    });
  }

  async requestCss(url, format) {
    const response = await axios.get(url, {
      headers: {
        accept: 'text/css,*/*;q=0.1',
        responseType: 'arraybuffer',
        'User-Agent': this.options.formatAgents[format]
      }
    });

    return response.data;
  }

  async parseCss(cssString) {
    const fontDisplay = 'swap';

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

    const plugins = this.options.useMinify
      ? [
          cssnano({
            preset: 'default'
          })
        ]
      : [];

    const { css } = await postcss(plugins).process(cssObject, {
      parser: postcssJs,
      from: undefined
    });

    return css;
  }
}

exports.onPreBootstrap = async ({ store }, options) => {
  const webFont = new WebFont(options);

  const css = await webFont.getCss();

  const { directory } = store.getState().program;

  const dir = path.join(directory, '.cache', 'webfonts');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, `webfonts.css`);

  fs.writeFileSync(filePath, css);
};
