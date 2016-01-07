'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var register = exports.register = function register(Handlebars) {

		Handlebars.registerHelper('includes', function (haystack, needle) {

				if (typeof needle !== 'string' && typeof needle !== 'numeric') {
						return false;
				}

				if (['string', 'numeric'].indexOf(typeof haystack === 'undefined' ? 'undefined' : _typeof(haystack)) !== -1) {

						return haystack.toString().includes(needle);
				} else if (Object.prototype.toString.call(haystack) === '[object Array]') {

						return haystack.indexOf(needle) !== -1;
				}

				return false;
		});
};