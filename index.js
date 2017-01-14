/**
 * Write-to-disk extension for Bundl
 */

var path = require('path');
var utils = require('seebigs-utils');

module.exports = function (options) {
    options = options || {};

    if (typeof options === 'string') {
        options = {
            outputDir: options
        };
    }

    function one (contents, r, done) {
        var destPath = r.dest;

        if (options.outputDir) {
            destPath = path.resolve(options.outputDir, r.name);
        }

        this.log && this.log('Writing ' + destPath);
        utils.writeFile(destPath, contents, function () {
            done(contents);
        });
    }

    return {
        one: one
    };

};
