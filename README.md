# grunt-md5sum

[![Build Status](https://travis-ci.org/monolithed/grunt-md5sum.svg)](https://travis-ci.org/monolithed/grunt-md5sum)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![License](http://img.shields.io/npm/l/object.assign.svg)](LICENSE.txt)


[![NPM](https://nodei.co/npm/grunt-md5sum.svg?downloads=true)](https://nodei.co/npm/grunt-md5sum/)


> Calculates and verifies 128-bit MD5 hashes, as described in RFC 1321 like [MD5sum](http://linux.die.net/man/1/md5sum) program

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-md5sum --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-md5sum');
```

## grunt-md5sum task
_Run this task with the `grunt md5sum` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### only_name
Type: `Boolean`

Write only the file name instead of an absolute path

#### process
Type: `Function(/* [ ...{ file, hex } ], [ ...files ] */)`

This option as an advanced way to control the file contents that are created.

```
....

options: {
	process: function (content, files) {
		return content;
	}
}

....
```


### Usage Example

```js
module.exports = function (grunt) {
	grunt.config.init({
		md5sum: {
			build: {
				files: [
					{
						'sum.md5': ['folder/**/*', 'files/**/*.{js,css}']
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-md5sum');
	grunt.registerTask('default', ['md5sum']);
};

```

This task supports all the file mapping format Grunt supports. Please read [Globbing patterns](http://gruntjs.com/configuring-tasks#globbing-patterns) and [Building the files object dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) for additional details.


### Result

##### File structure

```
├── path
│   ├── file.js
│   ├── file.css

```

##### Output file

```
path/file.js  d8e8fca2dc0f896fd7cb4cb0031ba248
path/file.css  d8e8fca2dc0f896fd7cb4cb0031ba249

```

##### Verify files with md5sum command 

```
➜ md5sum -c sum.md5 

path/file.js: OK
path/file.css: OK
```


### Tests

```
➜ grunt test 
```


### Links

[MD5sum user manual](http://linux.die.net/man/1/md5sum) <br />
[MD5sum wiki](https://en.wikipedia.org/wiki/Md5sum) <br />
[Microbrew MD5sum](http://www.microbrew.org/tools/md5sha1sum/) <br />



Task submitted by [Alexander Abashkin](https://github.com/monolithed)
