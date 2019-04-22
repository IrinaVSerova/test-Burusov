var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
// var runSequence = require('run-sequence');

var less = require('gulp-less');


gulp.task('server', function() {

	browserSync.init({
		server: {baseDir: './build/'}
	});
	watch('./src/less/**/*.less', function() {
		gulp.start('styles');
	});
});
gulp.task('styles', function() {
	return gulp.src('./src/less/main.less')
	  .pipe(less())
	  .pipe(gulp.dest('./build/css'));
});
gulp.task('copy:img', function() {
    return gulp.src(['./src/img/**/*.*'])
      .pipe(gulp.dest('./build/img'))
      .pipe(browserSync.stream());
});
// gulp.task('default', function(callback) {
// 	runSequence(
// 		'styles',
// 		'copy:img',
// 		'server',
// 		callback
// 	)
// });