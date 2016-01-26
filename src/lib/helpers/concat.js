export let register = (Handlebars) => {
	Handlebars.registerHelper('concat', (...args) => args.filter((arg) => typeof arg === 'string').join(''));
};