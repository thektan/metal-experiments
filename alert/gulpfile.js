'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'modal.css',
	bundleFileName: 'alert.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-experiment-alert'
});
