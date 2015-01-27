'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		'md5sum': {
			md5: {
				files: [
					{
						cwd: 'tests/fixtures/',
						src: ['**/*'],
						dest: 'tests/tmp/file.md5'
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
						cwd: 'tests/fixtures/',
						src: ['**/*'],
						dest: 'tests/tmp/file.json'
					}
				]
			},

			only_name: {
				options: {
					only_name: true
				},

				files: [
					{
						cwd: 'tests/fixtures/',
						src: ['**/*'],
						dest: 'tests/tmp/file.md5.only_name'
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
	grunt.registerTask('test', ['md5sum', 'nodeunit']);
};