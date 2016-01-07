export let register = (Handlebars) => {
	Handlebars.registerHelper('twitterHandle', (twitter) => twitter.replace(/^https?:\/\/(www\.)?twitter.com\/(.*)/,'$2').replace(/^@(.*)/,'$1'));
};