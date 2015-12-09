import path from "path";
import fs from "fs";

export let register = (Handlebars) => {

    let helpersPath = path.join(__dirname, 'lib/helpers');
    let helpers = fs.readdirSync(helpersPath);

    helpers.forEach((helper) => {

        helper = require(path.join(helpersPath, helper));

        if(typeof helper.register === 'function') {
            helper.register(Handlebars);
        }

    });

};