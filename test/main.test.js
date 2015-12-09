import assert from "assert";
import Handlebars from "handlebars";

require('../index').register(Handlebars);

describe('Main', function() {

    it('should load all helpers', (done) => {

        let source = `
            {{~#if (isEqual true true)}}isEqual {{/if}}
            {{~#if (and true true true)}}and {{/if}}
            {{~#if (isEqual (typeof 'string') 'string')}}typeof{{/if}}`;

        let template = Handlebars.compile(source);

        let rendered = template();

        assert.equal(rendered, 'isEqual and typeof');
        assert.notEqual(rendered, '');

        done();

    });

});