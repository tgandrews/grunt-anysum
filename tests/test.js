/*!
 * grunt-md5sum tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var fs    = require('fs'),
	utils = require('util');


var file = function (type, extension) {
	utils.format('tests/%s/file.%s', type, extension);

	return fs.readFileSync('tests/tmp/file.' + extension, 'utf8')
};

exports.md5sum = {
	md5: function (test) {
		var fixtures = file('tmp', 'md5'),
			expected = file('expected', 'md5');

		test.ok(fixtures === expected);

		test.done();
	},

	json: function (test) {
		var fixtures = file('tmp', 'json'),
			expected = file('expected', 'json');

		test.ok(fixtures === expected);

		test.done();
	}
};
