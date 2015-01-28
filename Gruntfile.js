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

			'md5.exclude_path': {
				options: {
					exclude_path: true
				},

				files: [
					{
						cwd: 'tests/fixtures/',
						src: ['**/*'],
						dest: 'tests/tmp/file.md5.exclude_path'
					}
				]
			},

			'md5.prefix': {
				options: {
					exclude_path: true,
					path_prefix : '/'
				},

				files: [
					{
						cwd: 'tests/fixtures/',
						src: ['**/*'],
						dest: 'tests/tmp/file.md5.prefix'
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