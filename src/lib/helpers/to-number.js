export let register = (Handlebars) => {
	Handlebars.registerHelper('toNumber', (string) => (string) * 1);
};