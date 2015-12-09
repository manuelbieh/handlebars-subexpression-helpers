export let register = (Handlebars) => {
	Handlebars.registerHelper('typeof', (value) => typeof value);
};