'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _highlight = require('./highlight');

var _highlight2 = _interopRequireDefault(_highlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {};
var lowlight = void 0;

if (process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD) {
	lowlight = require('lowlight/lib/core');
} else {
	defaultStyle = require('./styles/default-style').default;
	lowlight = require('lowlight');
}

exports.default = (0, _highlight2.default)(lowlight, defaultStyle);