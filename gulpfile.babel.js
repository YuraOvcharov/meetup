'use strict';
 
import gulp from 'gulp';
import sass from 'gulp-sass';
 
const dirs = {
  src: 'src',
  dest: 'public'
};
 
const sassPaths = {
  src: `${dirs.src}/main.scss`,
  dest: `${dirs.dest}/styles/`
};
 
gulp.task('styles', () => {
  return gulp.src(paths.src)
    .pipe(sass.sync().on('error', plugins.sass.logError))
    .pipe(gulp.dest(paths.dest));
});