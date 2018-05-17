
var write = require('../../index.js');

var path = require('path');
var utils = require('seebigs-utils');

function mockContents(c) {
    var _c = c;
    return {
        getString: function () {
            return _c;
        },
        set: function (newC) {
            _c = newC;
        },
    };
}

describe('rename', function () {

    var writtenPath = __dirname + '/../written/';

    describe('defaults to outputDir of each resource', function (expect, done) {
        var w = write();
        w.exec.call(console, {
            name: 'default.js',
            dest: path.resolve(writtenPath + 'default.js'),
            contents: mockContents('contents'),
        }, function () {
            expect(utils.readFile(writtenPath + 'default.js')).toBe('contents');
            done();
        });
    });

    describe('string as options becomes new outputDir', function (expect, done) {
        var w = write(writtenPath);
        w.exec.call(console, {
            name: 'str.js',
            dest: 'should be ignored',
            contents: mockContents('contents'),
        }, function () {
            expect(utils.readFile(writtenPath + 'str.js')).toBe('contents');
            done();
        });
    });

    describe('object.outputDir as options becomes new outputDir', function (expect, done) {
        var w = write({ outputDir: writtenPath });
        w.exec.call(console, {
            name: 'obj.js',
            dest: 'should be ignored',
            contents: mockContents('contents'),
        }, function () {
            expect(utils.readFile(writtenPath + 'obj.js')).toBe('contents');
            done();
        });
    });

});
