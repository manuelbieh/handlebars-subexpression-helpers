import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/concat").register(Handlebars);

describe('concat', function() {

    it('should concat arguments', (done) => {

        let source = '{{concat "a" "b" "c" "d"}}';
        let template = Handlebars.compile(source);
        let rendered = template();
        assert.equal(rendered, 'abcd');

        done();

    });

});