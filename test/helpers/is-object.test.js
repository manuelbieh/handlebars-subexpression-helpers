import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-object").register(Handlebars);

describe('isObject', function() {

    it('should return true if a value is an object', (done) => {

        let source = '{{#if (isObject testValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: {}
        });

        assert.equal(rendered, 'passed');

        done();

    });

    it('should not return true if a value is null', (done) => {

        let source = '{{#unless (isObject testValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: null
        });

        assert.equal(rendered, 'passed');

        done();

    });

    it('should not return true if a value is not an object', (done) => {

        let source = '{{#unless (isObject testValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            testValue: 'test'
        });

        assert.equal(rendered, 'passed');

        done();

    });

});