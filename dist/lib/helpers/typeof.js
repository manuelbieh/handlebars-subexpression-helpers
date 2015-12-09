'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var register = function register(Handlebars) {
	Handlebars.registerHelper('typeof', function (value) {
		return typeof value;
	});
};
exports.register = register;