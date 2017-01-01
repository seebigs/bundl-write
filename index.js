/**
 * Write-to-disk extension for Bundl
 */

var path = require('path');
var utils = require('seebigs-utils');

module.exports = function (options) {
    options = options || {};

    if (typeof options === 'string') {
        options = {
            dir: options
        };
    }

    function writeEach (contents, r, done) {
        var destPath = r.dest;

        if (options.dir) {
            destPath = path.resolve(options.dir, r.name);
        }

        this.log('Writing ' + destPath);
        utils.writeFile(destPath, contents, function () {
            done(contents);
        });
    }

    return {
        each: writeEach
    };

};
