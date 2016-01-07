import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/starts-with").register(Handlebars);

describe('startsWith', function() {

    it('should return true if a string starts with a given substring', (done) => {

        let source = '{{#if (startsWith alphabet "abc")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            alphabet: 'abcdefghijklmnopqrstuvwxyz'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});