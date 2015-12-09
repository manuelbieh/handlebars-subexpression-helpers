'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var register = function register(Handlebars) {
	Handlebars.registerHelper('isArray', function (value) {
		return Object.prototype.toString.call(value) === '[object Array]';
	});
};
exports.register = register;