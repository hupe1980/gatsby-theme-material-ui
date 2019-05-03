"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var path = require("path");

var fs = require("fs");

var axios = require("axios");

var postcss = require('postcss');

var postcssJs = require('postcss-js');

var cssnano = require('cssnano');

var defaultOptions = {
  fonts: {},
  formats: ['woff2', 'woff'],
  useMinify: true,
  formatAgents: {
    eot: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)',
    ttf: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8',
    woff: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko',
    woff2: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
  }
};
var defaultFontConfig = {
  fontDisplay: 'swap',
  useEncode: false
};
var DEFAULT_API_URL = "https://fonts.googleapis.com/css";

var WebFont =
/*#__PURE__*/
function () {
  function WebFont(options) {
    this.options = (0, _extends2["default"])({}, defaultOptions, options);
    this.options.fonts.google = this.options.fonts.google.map(function (font) {
      return (0, _extends2["default"])({}, defaultFontConfig, font);
    });
  }

  var _proto = WebFont.prototype;

  _proto.getCss =
  /*#__PURE__*/
  function () {
    var _getCss = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _this = this;

      var urls, cssStrings;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              urls = this.createRequestUrls();
              _context.next = 3;
              return Promise.all(this.options.formats.map(function (format) {
                return Promise.all(urls.map(function (url) {
                  return _this.requestCss(url, format);
                }));
              }));

            case 3:
              cssStrings = _context.sent;
              _context.next = 6;
              return this.parseCss(cssStrings.join(''));

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getCss() {
      return _getCss.apply(this, arguments);
    }

    return getCss;
  }();

  _proto.createRequestUrls = function createRequestUrls() {
    return this.options.fonts.google.map(function (font) {
      if (!font.family) return null;
      var requestUrl = DEFAULT_API_URL + "?family=" + font.family.replace(/ /g, '+');

      if (font.variants) {
        requestUrl += ":" + font.variants.join(',');
      }

      if (font.subsets) {
        requestUrl += "&subset=" + font.subsets.join(',');
      }

      if (font.text && font.text.length > 0) {
        requestUrl += "&text=" + encodeURIComponent(font.text);
      }

      return requestUrl;
    });
  };

  _proto.requestCss =
  /*#__PURE__*/
  function () {
    var _requestCss = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(url, format) {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get(url, {
                headers: {
                  accept: 'text/css,*/*;q=0.1',
                  responseType: 'arraybuffer',
                  'User-Agent': this.options.formatAgents[format]
                }
              });

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function requestCss(_x, _x2) {
      return _requestCss.apply(this, arguments);
    }

    return requestCss;
  }();

  _proto.parseCss =
  /*#__PURE__*/
  function () {
    var _parseCss = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(cssString) {
      var fontDisplay, root, cssObject, plugins, _ref, css;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              fontDisplay = 'swap';
              root = postcss.parse(cssString);
              cssObject = postcssJs.objectify(root);

              if (cssObject['@font-face']) {
                cssObject['@font-face'] = cssObject['@font-face'].reduce(function (acc, obj) {
                  var srcs = obj.src.split(',');
                  var index = acc.findIndex(function (element) {
                    return element.src.split(',')[0] === srcs[0];
                  }); // merge urls

                  if (index > -1) {
                    acc[index].src = acc[index].src + ", " + srcs[2];
                    return acc;
                  }

                  obj.fontDisplay = fontDisplay;
                  acc.push(obj);
                  return acc;
                }, []);
              }

              plugins = this.options.useMinify ? [cssnano({
                preset: 'default'
              })] : [];
              _context3.next = 7;
              return postcss(plugins).process(cssObject, {
                parser: postcssJs,
                from: undefined
              });

            case 7:
              _ref = _context3.sent;
              css = _ref.css;
              return _context3.abrupt("return", css);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function parseCss(_x3) {
      return _parseCss.apply(this, arguments);
    }

    return parseCss;
  }();

  return WebFont;
}();

exports.onPreBootstrap =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(_ref2, options) {
    var store, webFont, css, directory, dir, filePath;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            store = _ref2.store;
            webFont = new WebFont(options);
            _context4.next = 4;
            return webFont.getCss();

          case 4:
            css = _context4.sent;
            directory = store.getState().program.directory;
            dir = path.join(directory, '.cache', 'webfonts');

            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }

            filePath = path.join(dir, "webfonts.css");
            fs.writeFileSync(filePath, css);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();