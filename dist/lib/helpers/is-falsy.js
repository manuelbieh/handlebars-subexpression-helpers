'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var register = exports.register = function register(Handlebars) {
	Handlebars.registerHelper('isFalsy', function (arg) {
		return !!arg === false;
	});
};