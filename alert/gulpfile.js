'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'alertbox.css',
	bundleFileName: 'alertbox.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-experiment-alert'
});
