'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/style/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/style/sass/**/*.scss', ['sass']);
});