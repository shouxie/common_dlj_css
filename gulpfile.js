const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
gulp.task('css', function() {
  gulp.src('./common/*css')
      .pipe(concat('main.css'))
      .pipe(minifyCss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./'));
});
// gulp.task('auto', function() {
//   gulp.watch('common/*css', gulp.series('css'));
// });
gulp.task('default', gulp.series('css'));
