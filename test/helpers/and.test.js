import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/and").register(Handlebars);
require("../../dist/lib/helpers/not").register(Handlebars);

describe('and', function() {

    it('should all be true', (done) => {

        let source = '{{#if (and true true true)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should all be true', (done) => {

        let source = '{{#if (and true (not false) true)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should work with strings', (done) => {

        let source = '{{#if (and true "pass")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});