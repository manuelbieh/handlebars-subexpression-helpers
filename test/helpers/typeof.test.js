import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/typeof").register(Handlebars);

describe('typeof', function() {

    it('should return "undefined" for undefined', (done) => {

        let source = '{{#if (isEqual (typeof value) "undefined")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            value: undefined
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return all different types', (done) => {

        let source = `{{~#if (isEqual (typeof undefinedValue) "undefined")}}undefined {{/if}}
            {{~#if (isEqual (typeof booleanValueTrue) "boolean")}}boolean {{/if}}
            {{~#if (isEqual (typeof booleanValueFalse) "boolean")}}boolean {{/if}}
            {{~#if (isEqual (typeof stringValue) "string")}}string {{/if}}
            {{~#if (isEqual (typeof numericValue) "number")}}number{{/if}}`;

        let template = Handlebars.compile(source);

        let rendered = template({
            undefinedValue: undefined,
            booleanValueTrue: true,
            booleanValueFalse: false,
            stringValue: 'test',
            numericValue: 5,
        });

        assert.equal(rendered, 'undefined boolean boolean string number');
        assert.notEqual(rendered, '');

        done();

    });

});