export let register = (Handlebars) => {
	Handlebars.registerHelper('isFalsy', (arg) => !!arg === false);
};