/**
 * Write-to-disk extension for Bundl
 */

var path = require('path');
var utils = require('bundl-utils');

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
        utils.writeFile(destPath, r.contents, done);
    }

    return {
        each: writeEach
    };

};
