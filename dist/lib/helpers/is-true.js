export let register = Handlebars => {
	Handlebars.registerHelper('isTrue', arg => arg === true);
};