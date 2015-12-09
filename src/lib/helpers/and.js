export let register = (Handlebars) => {

	Handlebars.registerHelper('and', (...args) => {

        let result = true;

        args && args.forEach((val) => {

            if(!!val === false) {
                result = false;
                return;
            }

        });

        return result;

    });

};