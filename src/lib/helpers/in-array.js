export let register = (Handlebars) => {

	Handlebars.registerHelper('inArray', (haystack, needle) => {

		if(typeof needle !== 'string' && typeof needle !== 'numeric') {
			return false;
		}

		if (Object.prototype.toString.call(haystack) === '[object Array]') {
			return haystack.indexOf(needle) !== -1;
		}

		return false;

	});

};