module.exports.register = function(Handlebars) {
    require('./dist/index').register(Handlebars);
};