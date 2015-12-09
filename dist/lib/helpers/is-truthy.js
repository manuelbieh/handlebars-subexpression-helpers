export let register = Handlebars => {
	Handlebars.registerHelper('isTruthy', arg => !!arg === true);
};