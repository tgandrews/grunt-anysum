/*!
 * grunt-md5sum tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var fs    = require('fs'),
	utils = require('util');


var read_file = function (type, extension) {
	var file = utils.format('tests/%s/file.%s', type, extension);

	return fs.readFileSync(file, 'utf8')
};

exports.tests = {
	md5: function (test) {
		var fixtures = read_file('tmp', 'md5'),
			expected = read_file('expected', 'md5');

		test.ok(fixtures === expected);

		test.done();
	},

	json: function (test) {
		var fixtures = read_file('tmp', 'json'),
			expected = read_file('expected', 'json');

		test.ok(fixtures === expected);

		test.done();
	}
};
