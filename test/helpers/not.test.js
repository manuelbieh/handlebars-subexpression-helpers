import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/not").register(Handlebars);
require("../../dist/lib/helpers/is-truthy").register(Handlebars);
require("../../dist/lib/helpers/is-equal").register(Handlebars);

describe('not', function() {

    it('should return true if "false" is not truthy', (done) => {

        let source = '{{#if (not (isTruthy false))}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true if "a" is not "b"', (done) => {

        let source = '{{#if (not (isEqual "a" "b"))}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});