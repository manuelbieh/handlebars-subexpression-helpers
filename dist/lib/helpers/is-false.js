export let register = Handlebars => {
	Handlebars.registerHelper('isFalse', arg => arg === false);
};