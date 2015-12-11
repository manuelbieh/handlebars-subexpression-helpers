import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/ends-with").register(Handlebars);

describe('endsWith', function() {

    it('should return true if a string starts with a given substring', (done) => {

        let source = '{{#if (endsWith alphabet "xyz")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            alphabet: 'abcdefghijklmnopqrstuvwxyz'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});