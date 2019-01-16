webpackJsonp([3],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(26);\n__webpack_require__(38);\n\nvar Contact = _react2.default.createClass({\n    displayName: 'Contact',\n\n    render: function render() {\n        return _react2.default.createElement(\n            'div',\n            { is: true, 'class': 'page', id: 'info' },\n            _react2.default.createElement(\n                'h1',\n                null,\n                'Info'\n            ),\n            _react2.default.createElement(\n                'div',\n                { is: true, 'class': 'bio' },\n                'For now, I can be reached by email at ',\n                _react2.default.createElement(\n                    'a',\n                    { href: 'mailto:rw3iss@gmail.com' },\n                    'rw3iss@gmail.com'\n                ),\n                '.'\n            )\n        );\n    }\n});\n\nmodule.exports = Contact;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Info.jsx\n// module id = 37\n// module chunks = 3\n//# sourceURL=webpack:///./src/js/components/Info.jsx?");

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(39);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(13)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!../../../node_modules/postcss-loader/index.js!./Info.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!../../../node_modules/postcss-loader/index.js!./Info.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scss/components/Info.scss\n// module id = 38\n// module chunks = 3\n//# sourceURL=webpack:///./src/scss/components/Info.scss?");

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(12)();\n// imports\n\n\n// module\nexports.push([module.id, \"#info .bio {\\n  padding: 30px; }\\n\\n@media all and (max-width: 1023px) {\\n  #info {\\n    text-align: center; } }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader!./~/postcss-loader!./src/scss/components/Info.scss\n// module id = 39\n// module chunks = 3\n//# sourceURL=webpack:///./src/scss/components/Info.scss?./~/css-loader!./~/sass-loader!./~/postcss-loader");

/***/ })

});