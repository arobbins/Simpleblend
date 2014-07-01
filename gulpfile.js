var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename');


var target = {
    sass_src: 'css/scss/*.scss',
    css_dest: 'css',
    css_libs: [
    	'components/bootstrap-css-only/css/bootstrap.min.css'
    ]
};

function startExpress() {
	var express = require('express'),
		app = express();

	app.use(express.static(__dirname));
	app.listen(8000);
}

gulp.task('sass', function() {
    gulp.src('css/scss/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('concat', function() {
    gulp.src(['components/bootstrap-css-only/css/bootstrap.min.css', 'css/styles.min.css'])
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass', 'concat'], function() {
    gulp.watch("css/scss/*.scss", ['sass']);
    startExpress();
});


