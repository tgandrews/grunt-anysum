/*!
 * grunt-md5sum
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var fs     = require('fs'),
	utils  = require('util'),
	path   = require('path'),
	crypto = require('crypto');


module.exports = function (grunt) {
	grunt.registerMultiTask('md5sum', 'File information', function () {
		var options = this.options();

		var output = '',
			source = [];

		this.files.forEach(function (files) {
			files.src.forEach(function (name) {
				var file = null;

				try {
					file = path.resolve(files.cwd, name);
				}
				catch (error) {
					throw new Error('Could not resolve the current path');
				}

				if (!grunt.file.isFile(file)) {
					return 0;
				}

				try {
					var read = fs.readFileSync(file),
						hash = crypto.createHash(options.algorithm || 'md5');

					hash.update(read);

					var hex = hash.digest('hex');
					console.log(file, options.algorithm, hex);

					if (!hex) {
						grunt.fail.warn('Can not sum for ' + file);
					}
				}
				catch (error) {
					throw new Error('Could not read the files\n' + error);
				}

				if (options.exclude_path) {
					file = name;
				}

				if (options.path_prefix) {
					file = options.path_prefix + file;
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
					output += utils.format('%s  %s\n', file.hash, file.file);
				});
			}

			grunt.file.write(files.dest, output);
			grunt.log.writeln('File "' + files.dest + '" created.');
		});
	});
};
