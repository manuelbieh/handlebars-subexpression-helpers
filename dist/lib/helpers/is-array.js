export let register = Handlebars => {
	Handlebars.registerHelper('isArray', value => Object.prototype.toString.call(value) === '[object Array]');
};