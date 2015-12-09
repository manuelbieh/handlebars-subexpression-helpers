'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var register = exports.register = function register(Handlebars) {
	Handlebars.registerHelper('typeof', function (value) {
		return typeof value === 'undefined' ? 'undefined' : _typeof(value);
	});
};