import { join } from 'path';
import { argv } from 'yargs';
import * as _ from 'lodash';

/************************* DO NOT CHANGE ************************
 *
 * DO NOT make any changes in this file because it will
 * make your migration to newer versions of the seed harder.
 *
 * Your application-specific configurations should be
 * in project.config.ts. If you need to change any tasks
 * from './tasks' overwrite them by creating a task with the
 * same name in './projects'.
 *
 *****************************************************************/

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 */
export class SeedConfig {

  /**
   *
   * BUILD PARAMS
   */

  // Required js bundle module name. Needs to be dot notation.
  MODULE_NAME = 'typescript.seed';

  // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
  JS_BUNDLE_FORMAT = 'umd';


  /**
   * The flag for the debug option of the application.
   * The default value is `false`, which can be overriden by the `--debug` flag
   * when running `npm start`.
   * @type {boolean}
   */
  DEBUG = argv['debug'] || false;

  /**
   * BASE PATHS
   */

  APP_SRC = 'src';
  CJS_DIR = 'cjs';
  COVERAGE_DIR = 'coverage';
  DIST_DIR = 'dist';
  DOCS_DIR = 'docs';
  ES6_DIR = 'es6';
  SAMPLES_DIR = 'samples';
  TASKS_DIR = 'tasks';
  TMP_DIR = 'tmp';
  TOOLS_DIR = 'tools';
  TYPES_DIR = 'types';
  UMD_DIR = 'umd';

  DIST_ES6 = join(this.DIST_DIR, this.ES6_DIR);
  DIST_CJS = join(this.DIST_DIR, this.CJS_DIR);
  DIST_UMD = join(this.DIST_DIR, this.UMD_DIR);

  /**
   * FILES
   */
  TS_ENTRY_FILENAME = 'index.ts';
  ES6_ENTRY_FILENAME = 'index.js';
  JS_BUNDLE_FILENAME = 'index.js';
  JS_BUNDLE_MIN_FILENAME = 'index.min.js';
  PROJECT_README_FILENAME = 'PROJECT_README.md';
  NPM_README_FILENAME = 'NPM_README.md';


  /**
   * COVERAGE
   */
  // for source directory
  COVERAGE_JSON = 'coverage-final.json';
  COVERAGE_BASE_SRC_DIR = join(this.COVERAGE_DIR, this.APP_SRC);
  COVERAGE_SRC_JSON_PATH = join(this.COVERAGE_BASE_SRC_DIR, this.COVERAGE_JSON);

  COVERAGE_BASE_SAMPLES_DIR = join(this.COVERAGE_DIR, this.SAMPLES_DIR);
  COVERAGE_SAMPLES_JSON_PATH = join(this.COVERAGE_BASE_SAMPLES_DIR, this.COVERAGE_JSON);

  /**
   * PATHS
   */
  SRC_PATH = join(process.cwd(), this.APP_SRC);


  /**
   * TASK PATHS
   */
  TASKS_PATH = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR);

  /**
   * SPECIFIC FILES
   */
  RESHRINKWRAP = join(process.cwd(), this.TOOLS_DIR, 'utils', 'seed', 'npm', 'reshrinkwrap');
  GIT_HOOKS_PATH = join(process.cwd(), this.TOOLS_DIR, 'git_hooks');

  TYPESCRIPT_ES6_CONFIG = {
    'declaration': true,
    'stripInternal': true,
    'experimentalDecorators': true,
    'module': 'es2015',
    'moduleResolution': 'node',
    'sourceMap': true,
    'inlineSources': true,
    'target': 'es5',
    'skipLibCheck': true,
    'removeComments': true,
    'lib': [ 'es2015', 'dom' ]
  };

  TYPESCRIPT_CJS_CONFIG = ((_config) => {
    let config = _.cloneDeep(_config);

    // do not create *.d.ts files
    config['declaration'] = false;
    config['module'] = 'CommonJS';
    // config['suppressExcessPropertyErrors'] = true;

    return config;

  })(this.TYPESCRIPT_ES6_CONFIG);

  ROLLUP_CONFIG = {
    ROLLUP: {
      entry: join(this.DIST_ES6, this.ES6_ENTRY_FILENAME)
    },

    BUNDLE: {
      dest: join(this.DIST_UMD, this.JS_BUNDLE_FILENAME),

      // required for umd bundles
      moduleName: this.MODULE_NAME,

      // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
      format: this.JS_BUNDLE_FORMAT,
      sourceMap: true

    }
  };

  /**
   * The port where the application will run, if the `hot-loader` option mode
   * is used. The default hot-loader port is `5578`.
   *
   * @type {number}
   */
  HOT_LOADER_PORT                         = 5578;

  /**
   * The BrowserSync configuration serving coverage reports.
   * The default open behavior is to open the browser,
   * To prevent the browser from opening
   * `--b`  flag when running `npm start` (tested with serve.dev)
   * example `npm start -- --b`
   * @type {any}
   */
  BROWSER_SYNC_CONFIG_COVERAGE_SRC: any = {
    middleware: [require('connect-history-api-fallback')({ index: join('/' + `index.html`) })],
    port: 8090,
    // startPath: this.APP_SRC + '/',
    open: argv['b'] ? false : true,
    files: [].concat(
      // [this.BROWSER_DEST + '/app/**/*.css'],
      // [this.BROWSER_DEST + '/app/**/*.scss'],
      [join(this.COVERAGE_DIR, this.APP_SRC, '**', '*.json')],
      [join(this.COVERAGE_DIR, this.APP_SRC, '**', '*.html')],
      [join(this.COVERAGE_DIR, 'index.html')],
      [join(this.COVERAGE_DIR, '**', '*.svg')],
      [join(this.COVERAGE_DIR, '**', '*.map')]
    ),
    server: {
      baseDir: join(this.COVERAGE_DIR, this.APP_SRC),
      index: 'index.html'
    }
  };

  BROWSER_SYNC_CONFIG_COVERAGE_SAMPLES: any = ((_config) => {
    let config = _.cloneDeep(_config);

    config.files = [].concat(
      // [this.BROWSER_DEST + '/app/**/*.css'],
      // [this.BROWSER_DEST + '/app/**/*.scss'],
      [join(this.COVERAGE_DIR, this.SAMPLES_DIR, '**', '*.json')],
      [join(this.COVERAGE_DIR, this.SAMPLES_DIR, '**', '*.html')],
      [join(this.COVERAGE_DIR, 'index.html')],
      [join(this.COVERAGE_DIR, '**', '*.svg')],
      [join(this.COVERAGE_DIR, '**', '*.map')]
    );

    config.server.baseDir = join(this.COVERAGE_DIR, this.SAMPLES_DIR);

    return config;

  })(this.BROWSER_SYNC_CONFIG_COVERAGE_SRC);

  /**
   * The version of the application as defined in the `package.json`.
   */
  VERSION = appVersion();


  /**
   * The required NPM version to run the application.
   * @type {string}
   */
  VERSION_NPM = '2.14.2';

  /**
   * The required NodeJS version to run the application.
   * @type {string}
   */
  VERSION_NODE = '4.0.0';

}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} the applications version
 */
function appVersion(): number | string {
  var pkg = require('../../package.json');
  return pkg.version;
}

/**
 * Returns the linting configuration to be used for `codelyzer`.
 * @return {string[]} the list of linting rules
 */
function customRules(): string[] {
  var lintConf = require('../../tslint.json');
  return lintConf.rulesDirectory;
}

