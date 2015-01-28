'use strict';

var fs    = require('fs'),
	utils = require('util');


module.exports = {
	read_file: function (type, extension) {
		var file = utils.format('tests/%s/file.%s', type, extension);
			file = fs.readFileSync(file, 'utf8');

		var path = new RegExp(__dirname, 'g');

		return file.replace(path, '');
	},

	test_plan: function (test, option) {
		var fixtures = this.read_file('tmp', option),
			expected = this.read_file('expected', option);

		test.ok(fixtures === expected);
		test.done();
	}
};
