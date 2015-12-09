export let register = Handlebars => {
	Handlebars.registerHelper('not', arg1 => !arg1);
};