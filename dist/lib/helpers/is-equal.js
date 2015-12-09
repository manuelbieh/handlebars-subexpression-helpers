'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var register = exports.register = function register(Handlebars) {
	Handlebars.registerHelper('isEqual', function (arg1, arg2) {
		return arg1 == arg2;
	});
};