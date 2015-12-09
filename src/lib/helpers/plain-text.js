export let register = (Handlebars) => {
	Handlebars.registerHelper('plainText', (html) => html.replace(/(<([^>]+)>)/ig,"").replace(/\n{1,}/g,' '));
};