'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var register = function register(Handlebars) {
	Handlebars.registerHelper('plainText', function (html) {
		return html.replace(/(<([^>]+)>)/ig, '').replace(/\n{1,}/g, ' ');
	});
};
exports.register = register;