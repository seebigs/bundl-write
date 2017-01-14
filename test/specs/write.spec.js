
var write = require('../../index.js');

var path = require('path');
var utils = require('seebigs-utils');

describe('rename', function () {

    var writtenPath = __dirname + '/../written/';

    describe('defaults to outputDir of each resource', function (expect, done) {
        var w = write();
        w.one.call(console, 'default', {
            name: 'default.js',
            dest: path.resolve(writtenPath + 'default.js')
        }, function () {
            expect(utils.readFile(writtenPath + 'default.js')).toBe('default');
            done();
        });
    });

    describe('string as options becomes new outputDir', function (expect, done) {
        var w = write(writtenPath);
        w.one.call(console, 'str', {
            name: 'str.js',
            dest: 'should be ignored'
        }, function () {
            expect(utils.readFile(writtenPath + 'str.js')).toBe('str');
            done();
        });
    });

    describe('object.outputDir as options becomes new outputDir', function (expect, done) {
        var w = write({ outputDir: writtenPath });
        w.one.call(console, 'obj', {
            name: 'obj.js',
            dest: 'should be ignored'
        }, function () {
            expect(utils.readFile(writtenPath + 'obj.js')).toBe('obj');
            done();
        });
    });

});
