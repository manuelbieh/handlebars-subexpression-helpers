'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var register = exports.register = function register(Handlebars) {
	Handlebars.registerHelper('twitterHandle', function (twitter) {
		return twitter.replace(/^https?:\/\/(www\.)?twitter.com\/(.*)/, '$2').replace(/^@(.*)/, '$1');
	});
};