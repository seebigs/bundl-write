/**
 * Write-to-disk extension for Bundl
 */

var path = require('path');
var prettierBytes = require('prettier-bytes');
var utils = require('seebigs-utils');

module.exports = function (options) {
    options = options || {};

    if (typeof options === 'string') {
        options = {
            outputDir: options
        };
    }

    function write (r, done) {
        var destPath = r.dest;
        var contents = r.contents.getString();
        var contentsSize = Buffer.byteLength(contents, 'utf8');

        if (options.outputDir) {
            destPath = path.resolve(options.outputDir, r.name);
        }

        var msg = 'Writing ' + destPath + ' ' + prettierBytes(contentsSize);
        this.log && this.log.cyan && this.log.cyan(msg);
        utils.writeFile(destPath, contents, done);
    }

    return {
        name: 'write',
        stage: 'stringy',
        exec: write,
    };

};
