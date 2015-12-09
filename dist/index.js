"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = undefined;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var register = exports.register = function register(Handlebars) {

    var helpersPath = _path2.default.join(__dirname, 'lib/helpers');
    var helpers = _fs2.default.readdirSync(helpersPath);

    helpers.forEach(function (helper) {

        helper = require(_path2.default.join(helpersPath, helper));

        if (typeof helper.register === 'function') {
            helper.register(Handlebars);
        }
    });
};