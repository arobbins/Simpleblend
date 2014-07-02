var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename');
	uglify = require('gulp-uglify');

var paths = {
	scripts: [
		'js/vendor/angular.min.js',
		'js/vendor/angular-ui-router.min.js',
		'js/vendor/angular-scroll.min.js',
		'js/vendor/ui-bootstrap-tpls-0.11.0.min.js',
		'js/vendor/ui-utils.min.js',
		'js/app/app.js',
		'js/app/controllers/*.js',
		'js/app/services/*.js',
		'js/app/directives/*.js'
	]
};

function startExpress() {
	var express = require('express'),
		app = express();

	app.use(express.static(__dirname));
	app.listen(9012);
}

gulp.task('styles', function() {
    gulp.src('css/scss/main.scss')
		.pipe(sass({includePaths: ['scss']}))
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('css'));
});

// Minify and concat all js scripts
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['styles', 'scripts'], function() {
    gulp.watch("css/scss/*.scss", ['styles']);
    gulp.watch("js/**/*.js", ['scripts']);
    startExpress();
});


