import assert from "assert";
import Handlebars from "handlebars";

require("../../dist/lib/helpers/is-truthy").register(Handlebars);

describe('isTruthy', function() {

    it('should return false for undefined', (done) => {

        let source = '{{#unless (isTruthy truthyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            truthyValue: undefined
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for false (obviously ...)', (done) => {

        let source = '{{#unless (isTruthy truthyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            truthyValue: false
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for NaN', (done) => {

        let source = '{{#unless (isTruthy truthyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            truthyValue: NaN
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for null', (done) => {

        let source = '{{#unless (isTruthy truthyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            truthyValue: null
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

    it('should return false for an empty string', (done) => {

        let source = '{{#unless (isTruthy truthyValue)}}passed{{/unless}}';
        let template = Handlebars.compile(source);

        let rendered = template({
            truthyValue: ''
        });

        assert.equal(rendered, 'passed');
        assert.notEqual(rendered, '');

        done();

    });

});