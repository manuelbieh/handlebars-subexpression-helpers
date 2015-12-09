export let register = (Handlebars) => {
	Handlebars.registerHelper('isEqual', (arg1, arg2) => arg1 == arg2);
};