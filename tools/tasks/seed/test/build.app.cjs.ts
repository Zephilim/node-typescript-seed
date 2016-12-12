import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join  } from 'path';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let files: string[] = [
    join(Config.SRC_DIR, '**', '*.ts'),
  ];

  return gulp.src(files)
    .pipe(plugins.typescript(Config.TYPESCRIPT_CJS_CONFIG))
    .pipe(gulp.dest(join(Config.TMP_DIR)));
};
