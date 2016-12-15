import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import { join } from 'path';
import Config from './tools/config';
import {loadTasks} from './tools/utils';
import {checkEnvironment} from './tools/utils';

checkEnvironment({
  requiredNpmVersion: '>=3.5.3 <4.0.0',
  requiredNodeVersion: '>=5.4.1 <7.0.0',
});

loadTasks(Config.TASKS_PATH);

/**
 * BUILD
 */
gulp.task('build', function (done: any) {
  runSequence(
    'clean.build',
    'build.es6',
    'build.cjs',
    'rollup.umd',
    'rollup.umd.uglify',
    done);
});

/**
 * QA
 */
gulp.task('qa.dev', function(done: any) {
  runSequence(
    'tslint.dev',
    'test',
    done);
});

gulp.task('qa.env', function(done: any) {
  runSequence(
    'tslint.env',
    done);
});

gulp.task('qa.coverage', function(done: any) {
  runSequence(
    'tslint.dev',
    'test.coverage.src',
    done);
});


/**
 * TEST
 */
gulp.task('watch.src', function(done: any) {
  runSequence(
    'clean.test.cjs.src',
    'jasmine',
    'watch.src.dir',
    done);
});


gulp.task('test.src', function (done: any) {
  runSequence(
    'clean.test.cjs.src',
    'jasmine.src',
    done);
});

gulp.task('test.src.coverage', function (done: any) {
  runSequence(
    'clean.coverage.src',
    'clean.test.cjs.src',
    'build.test.cjs.src',
    'instrument.src',
    'cover.src',
    done);
});



/**
 * RELEASE
 */
gulp.task('release', function (done: any) {
  runSequence(
    'bump',
    '_release',
    done);
});

gulp.task('release.build', function (done: any) {
  runSequence(
    'bump.build',
    '_release',
    done);
});

gulp.task('release.alpha', function (done: any) {
  runSequence(
    'bump.alpha',
    '_release',
    done);
});

gulp.task('release.beta', function (done: any) {
  runSequence(
    'bump.beta',
    '_release',
    done);
});

gulp.task('release.rc', function (done: any) {
  runSequence(
    'bump.rc',
    '_release',
    done);
});

gulp.task('release.patch', function (done: any) {
  runSequence(
    'bump.patch',
    '_release',
    done);
});

gulp.task('release.minor', function (done: any) {
  runSequence(
    'bump.minor',
    '_release',
    done);
});

gulp.task('release.major', function (done: any) {
  runSequence(
    'bump.major',
    '_release',
    done);
});



// --------------
// Release

// Sub task, do not call directly
gulp.task('_release', function (done: any) {
  runSequence(
    // 'changelog',
    'commit.changes',
    'push.changes',
    'create.new.tag',
    'github.release',

    // update changelog and push to master
    'regenerate.changelog',
    'commit.changes',
    'push.changes',
    function (error: any) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      done(error);
    });
});

gulp.task('postinstall', function(done: any) {
  runSequence(
    'copy.gitHooks',
    'reshrinkwrap',
    done);
});

gulp.task('init', function(done: any) {
  runSequence(
    'copy.readme',
    'init.npm.readme',
    done);
});

