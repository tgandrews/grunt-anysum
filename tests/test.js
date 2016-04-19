/*!
 * grunt-md5sum tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var utils = require('./utils.js');

exports.tests = {
	md5: function (test) {
		utils.test_plan(test, 'md5');
	},

	'md5.exclude_path': function (test) {
		utils.test_plan(test, 'md5.exclude_path');
	},

	'md5.prefix': function (test) {
		utils.test_plan(test, 'md5.prefix');
	},

	json: function (test) {
		utils.test_plan(test, 'json');
	},

	sha256: function (test) {
		utils.test_plan(test, 'sha256');
	}
};
