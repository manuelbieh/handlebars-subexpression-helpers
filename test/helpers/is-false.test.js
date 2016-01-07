import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-falsy").register(Handlebars);


describe('isFalse', function() {

    it('should return false for undefined', (done) => {

        let source = '{{#unless (isFalse falsyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: undefined
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true for false (obviously ...)', (done) => {

        let source = '{{#if (isFalse falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: false
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for NaN', (done) => {

        let source = '{{#unless (isFalse falsyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: NaN
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for null', (done) => {

        let source = '{{#unless (isFalse falsyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: null
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for an empty string', (done) => {

        let source = '{{#unless (isFalse falsyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: ''
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});