import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-true").register(Handlebars);

describe('isTrue', function() {

    it('should return true for true (of course)', (done) => {

        let source = '{{#if (isTrue true)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for "string"', (done) => {

        let source = '{{#unless (isTrue "string")}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });


});