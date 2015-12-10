'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var register = exports.register = function register(Handlebars) {

	Handlebars.registerHelper('endsWith', function (haystack, needle) {

		if (typeof haystack !== 'string' && typeof haystack !== 'numeric') {
			return false;
		}

		if (typeof needle !== 'string' && typeof needle !== 'numeric') {
			return false;
		}

		return haystack.toString().endsWith(needle);
	});
};