webpackJsonp([2],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar db = __webpack_require__(17);\nvar Item = __webpack_require__(22);\n\n__webpack_require__(26);\n__webpack_require__(35);\n\nvar Play = _react2.default.createClass({\n    displayName: 'Play',\n\n    componentWillMount: function componentWillMount() {\n        var items = db.getPlay();\n        this.state = { items: items };\n    },\n\n    handleClick: function handleClick(item) {\n        if (item.isOpen == true) item.isOpen = false;else item.isOpen = true;\n        this.forceUpdate();\n    },\n\n    render: function render() {\n        var self = this;\n        return _react2.default.createElement(\n            'div',\n            { is: true, 'class': 'page', id: 'play' },\n            _react2.default.createElement(\n                'h1',\n                null,\n                'Play'\n            ),\n            _react2.default.createElement(\n                'div',\n                { is: true, 'class': 'items', flex: 'row wrap' },\n                this.state.items.map(function (item, i) {\n                    return _react2.default.createElement(Item, { item: item, key: i });\n                })\n            )\n        );\n    }\n});\n\nmodule.exports = Play;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Play.jsx\n// module id = 34\n// module chunks = 2\n//# sourceURL=webpack:///./src/js/components/Play.jsx?");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(36);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(13)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!../../../node_modules/postcss-loader/index.js!./Play.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!../../../node_modules/postcss-loader/index.js!./Play.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scss/components/Play.scss\n// module id = 35\n// module chunks = 2\n//# sourceURL=webpack:///./src/scss/components/Play.scss?");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(12)();\n// imports\n\n\n// module\nexports.push([module.id, \"#play h3 {\\n  padding: 30px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader!./~/postcss-loader!./src/scss/components/Play.scss\n// module id = 36\n// module chunks = 2\n//# sourceURL=webpack:///./src/scss/components/Play.scss?./~/css-loader!./~/sass-loader!./~/postcss-loader");

/***/ })

});