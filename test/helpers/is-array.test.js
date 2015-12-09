import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-array").register(Handlebars);

describe('isArray', function() {

    it('should return true if a value is an array', (done) => {

        let source = '{{#if (isArray testValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: [1,2,3]
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should not return true if a value is not an array', (done) => {

        let source = '{{#unless (isArray testValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: 'string'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});