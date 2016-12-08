/* File: gulpfile.js */


var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');


gulp.task('default', function() {
	return watch('sass/**/*.scss', function () {
  		gulp.src('sass/**/*.scss')
        	.pipe(sass().on('error', sass.logError))
        	.pipe(gulp.dest('./css/'));
    });
});
