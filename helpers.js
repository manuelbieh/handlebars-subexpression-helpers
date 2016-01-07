var path = require('path');
var fs = require('fs');

var helpersPath = path.join(__dirname, 'dist/lib/helpers');
var helperFiles = fs.readdirSync(helpersPath);

var helpers = {};

helperFiles.forEach(function(filename) {

    helper = require(path.join(helpersPath, filename));

    var moduleName = path.basename(filename, '.js').replace(/-([a-z]{1})/g, function(_, char) {
    	return char.toUpperCase();
    });

    if(typeof helper.register === 'function') {
        helpers[moduleName] = helper.register;
    }

});

module.exports = helpers;