import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-falsy").register(Handlebars);


describe('isFalsy', function() {

    it('should return true for undefined', (done) => {

        let source = '{{#if (isFalsy falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: undefined
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true for false (obviously ...)', (done) => {

        let source = '{{#if (isFalsy falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: false
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true for NaN', (done) => {

        let source = '{{#if (isFalsy falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: NaN
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true for null', (done) => {

        let source = '{{#if (isFalsy falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: null
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return true for an empty string', (done) => {

        let source = '{{#if (isFalsy falsyValue)}}passed{{/if}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            falsyValue: ''
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});