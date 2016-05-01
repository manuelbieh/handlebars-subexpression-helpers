'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var register = exports.register = function register(Handlebars) {

    Handlebars.registerHelper('and', function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var result = true;

        args && args.forEach(function (val) {

            if (!!val === false) {
                result = false;
                return;
            }
        });

        return result;
    });
};