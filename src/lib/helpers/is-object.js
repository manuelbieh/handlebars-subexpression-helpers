export let register = (Handlebars) => {
	Handlebars.registerHelper('isObject', (value) => typeof value === 'object' && value !== null);
};