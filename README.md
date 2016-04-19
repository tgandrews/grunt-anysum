# grunt-anysum

Based on grunt-md5sum

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

#### exclude_path
Type: `Boolean`

Exclude an absolute path

#### path_prefix
Type: `Boolean`

Append a path prefix

#### algorithm
Type: `String`

The hashing algorithm to use. Defaults to md5.

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
						cwd : 'files/',
						src : ['**/*.{js,css}'],
						dest: 'sum.md5'
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
d8e8fca2dc0f896fd7cb4cb0031ba248  path/file.js
d8e8fca2dc0f896fd7cb4cb0031ba249  path/file.css
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
