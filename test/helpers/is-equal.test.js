import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-equal").register(Handlebars);

describe('isEqual', function() {

    it('should return true if values are equal', (done) => {

        let source = '{{#if (isEqual "aaa" testValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: 'aaa'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});