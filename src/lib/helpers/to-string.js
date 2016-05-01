export let register = (Handlebars) => {
	Handlebars.registerHelper('toString', (string) => string && string.toString() || '');
};