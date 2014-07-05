/* ====================================================================
Definitions
==================================================================== */
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngcrush = require('imagemin-pngcrush'),
	svgo = require('imagemin-svgo'),
	paths = {
		html: [
			'./index.html',
			'./views/*.html'
		],
		sass: {
			main: 'css/scss/main.scss',
			all: 'css/scss/*.scss'
		},
		css: {
			main: 'styles.min.css',
			dest: 'css'
		},
		js: {
			main: 'scripts.min.js',
			dest: 'js',
			vendor: [
				// Order matters for vendor libraries
				'js/vendor/angular.min.js',
				'js/vendor/angular-ui-router.min.js',
				'js/vendor/angular-scroll.min.js',
				'js/vendor/ui-bootstrap-tpls-0.11.0.min.js',
				'js/vendor/ui-utils.min.js',
				'js/vendor/svg.logos.js'
			],
			local: [
				'js/app/app.js',
				'js/app/controllers/*.js',
				'js/app/services/*.js',
				'js/app/directives/*.js'
			]
		},
		images: {
			'src': 'images/*',
			'dest': 'images'
		}
	};
	paths.js.all = paths.js.vendor.concat(paths.js.local);

/* ====================================================================
Server
==================================================================== */
gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: "./"
		}
	});
});

/* ====================================================================
Styles
==================================================================== */
gulp.task('styles', function() {
	gulp.src(paths.sass.main)
		.pipe(sass({
			includePaths: ['scss']
		}))
		.pipe(minifyCSS())
		.pipe(rename(paths.css.main))
		.pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Linting
==================================================================== */
gulp.task('linting', function() {
	return gulp.src(paths.js.local)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/* ====================================================================
Scripts
==================================================================== */
gulp.task('scripts', ['linting'], function() {
	return gulp.src(paths.js.all)
		.pipe(uglify())
		.pipe(concat(paths.js.main))
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Images
==================================================================== */
gulp.task('images', function() {
    return gulp.src(paths.images.src)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [
				pngcrush(),
				svgo()
			]
		}))
		.pipe(gulp.dest(paths.images.dest));
});

/* ====================================================================
HTML
==================================================================== */
gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Tying everything together...
==================================================================== */
gulp.task('default', ['browser-sync', 'styles', 'linting', 'scripts', 'images', 'html'], function() {
	gulp.watch([paths.sass.all], ['styles']);
	gulp.watch([paths.js.all], ['linting', 'scripts']);
	gulp.watch([paths.html], ['html']);
});
