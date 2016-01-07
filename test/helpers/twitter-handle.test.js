import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/twitter-handle").register(Handlebars);

describe('twitterHandle', function() {

    it('should get a twitter handle (without the @)', (done) => {

        let source = '{{twitterHandle "https://www.twitter.com/manuelbieh"}}';
        let template = Handlebars.compile(source);
        let rendered = template();
        assert.equal(rendered, 'manuelbieh');

        source = '{{twitterHandle "http://www.twitter.com/manuelbieh2"}}';
        template = Handlebars.compile(source);
        rendered = template();
        assert.equal(rendered, 'manuelbieh2');

        source = '{{twitterHandle "https://twitter.com/manuelbieh"}}';
        template = Handlebars.compile(source);
        rendered = template();
        assert.equal(rendered, 'manuelbieh');

        source = '{{twitterHandle "http://twitter.com/manuelbieh2"}}';
        template = Handlebars.compile(source);
        rendered = template();
        assert.equal(rendered, 'manuelbieh2');

        source = '{{twitterHandle "@manuelbieh"}}';
        template = Handlebars.compile(source);
        rendered = template();
        assert.equal(rendered, 'manuelbieh');

        done();

    });

});