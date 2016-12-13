import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

var SpecReporter = require('jasmine-spec-reporter');

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let cjsInstrumentFiles = [
    'src/**/*.js',
    '!src/**/*.spec.js'
  ];

  return gulp.src(cjsInstrumentFiles)
    .pipe(plugins.istanbul())
    .pipe(plugins.istanbul.hookRequire()); //this forces any call to 'require' to return our instrumented files
};