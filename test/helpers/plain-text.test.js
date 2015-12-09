import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/plain-text").register(Handlebars);
require("../../dist/lib/helpers/and").register(Handlebars);

describe('plainText', function() {

    it('should remove html from a string', (done) => {

        let source = '{{#if (isEqual (plainText htmlContent) "plain text")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            htmlContent: '<div><b>plain text</b></div>'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});