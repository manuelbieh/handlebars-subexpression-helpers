'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var register = exports.register = function register(Handlebars) {

	Handlebars.registerHelper('inArray', function (haystack, needle) {

		if (typeof needle !== 'string' && typeof needle !== 'number') {
			return false;
		}

		if (Object.prototype.toString.call(haystack) === '[object Array]') {
			return haystack.indexOf(needle) !== -1;
		}

		return false;
	});
};