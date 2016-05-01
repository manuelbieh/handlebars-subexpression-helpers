export let register = (Handlebars) => {

	Handlebars.registerHelper('includes', (haystack, needle) => {

		if(typeof needle !== 'string' && typeof needle !== 'number') {
			return false;
		}

		if(typeof haystack === 'string') {
			haystack = haystack.split();
		}

		if(['string', 'number'].indexOf(typeof haystack) !== -1) {

			return (haystack).toString().includes(needle);

		} else if (Object.prototype.toString.call(haystack) === '[object Array]') {

			return haystack.indexOf(needle) !== -1;

		}

		return false;

	});

};