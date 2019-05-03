"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents;
  var css = fs.readFileSync(path.join(process.cwd(), '.cache', 'webfonts', 'webfonts.css'));
  setHeadComponents([_react["default"].createElement("link", {
    rel: "preconnect",
    key: "preconnect-fonts.googleapis.com",
    href: "https://fonts.googleapis.com",
    crossOrigin: "anonymous"
  }), _react["default"].createElement("style", {
    key: "googleFontsCss",
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: css
    }
  })]);
};

exports.onRenderBody = onRenderBody;