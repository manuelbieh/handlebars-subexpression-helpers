export let register = (Handlebars) => {

	Handlebars.registerHelper('startsWith', (haystack, needle) => {

		if(typeof haystack !== 'string' && typeof haystack !== 'numeric') {
			return false;
		}

		if(typeof needle !== 'string' && typeof needle !== 'numeric') {
			return false;
		}

		return haystack.toString().startsWith(needle);

	});

};