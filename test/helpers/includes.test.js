import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/includes").register(Handlebars);

describe('includes', function() {

    it('should return true if a string includes a certain value', (done) => {

        let source = '{{#if (includes alphabet "klmno")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            alphabet: 'abcdefghijklmnopqrstuvwxyz'
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true if an array includes a certain value', (done) => {

        let source = '{{#if (includes alphabet "m")}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            alphabet: 'abcdefghijklmnopqrstuvwxyz'.split('')
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});