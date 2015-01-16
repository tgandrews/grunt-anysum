'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		'md5sum': {
			md5: {
				files: [
					{
						'tests/tmp/file.md5': 'tests/fixtures/**'
					}
				]
			},

			json: {
				options: {
					process: function (content) {
						return content;
					}
				},

				files: [
					{
						'tests/tmp/file.json': 'tests/fixtures/**'
					}
				]
			}
		},

		nodeunit: {
			tasks: ['tests/test.js']
		},

		clean: {
			test: ['tests/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['md5sum', 'nodeunit', 'clean']);
};