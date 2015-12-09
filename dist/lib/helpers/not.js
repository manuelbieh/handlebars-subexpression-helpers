'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var register = function register(Handlebars) {
	Handlebars.registerHelper('not', function (arg1) {
		return !arg1;
	});
};
exports.register = register;