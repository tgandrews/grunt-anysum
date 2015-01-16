/*!
 * grunt-md5sum
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var fs     = require('fs'),
	utils  = require('util'),
	crypto = require('crypto');


module.exports = function (grunt) {
	grunt.registerMultiTask('md5sum', 'File information', function () {
		var options = this.options();

		var output = '',
			source = [];

		this.files.forEach(function (files) {
			files.src.forEach(function (file) {
				if (!grunt.file.isFile(file)) {
					return 0;
				}

				var read = fs.readFileSync(file),
					hash = crypto.createHash('md5');

				hash.update(read);

				var hex = hash.digest('hex');

				if (!hex) {
					grunt.fail.warn('Can not sum for ' + file);
				}

				source.push({
					file: file,
					hash: hex
				});
			});

			if (options.process) {
				output = JSON.stringify(source, null, '\t');
				output = options.process(output, files.src);
			}
			else {
				source.forEach(function (file) {
					output += utils.format('%s  %s\n', file.file, file.hash);
				});
			}

			grunt.file.write(files.dest, output);
			grunt.log.writeln('File "' + files.dest + '" created.');
		});
	});
};
