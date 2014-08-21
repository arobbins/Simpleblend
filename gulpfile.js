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
	prefix = require('gulp-autoprefixer')
	config = {
		html: {
			paths: [
				'./index.html',
				'./views/*.html'
			]
		},
		css: {
			names: {
				vendor: 'vendor.min.css',
				local: 'local.min.css',
				dest: 'css'
			},
			paths: {
				vendor: [
					'css/vendor/angular-carousel.min.css'
				],
				local: {
					entry: 'css/scss/main.scss',
					all: 'css/scss/*.scss'
				}
			}
		},
		js: {
			names: {
				vendor: 'vendor.min.js',
				local: 'local.min.js',
				dest: 'js'
			},
			paths: {
				vendor: [
					// Order matters here
					'js/vendor/angular.min.js',
					'js/vendor/angular-ui-router.min.js',
					'js/vendor/angular-scroll.min.js',
					'js/vendor/ui-utils.min.js',
					'js/vendor/svg.logos.js',
					'js/vendor/angularSlideables.js',
					'js/vendor/angular-animate.js',
					'js/vendor/angular-touch.min.js',
					'js/vendor/angular-carousel.min.js'
				],
				local: [
					'js/app/app.js',
					'js/app/controllers/*.js',
					'js/app/services/*.js',
					'js/app/directives/*.js'
				]
			}
		},
		images: {
			paths: [
				'images/*'
			],
			names: {
				dest: 'images'
			}
		}
	};

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
Styles - Vendor
==================================================================== */
gulp.task('styles-vendor', function() {
	gulp.src(config.css.paths.vendor)
		.pipe(minifyCSS())
		.pipe(rename(config.css.names.vendor))
		.pipe(gulp.dest(config.css.names.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Styles - Local
==================================================================== */
gulp.task('styles-local', function() {
	gulp.src(config.css.paths.local.entry)
		.pipe(sass({
			includePaths: ['scss']
		}))
		.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
		.pipe(minifyCSS())
		.pipe(rename(config.css.names.local))
		.pipe(gulp.dest(config.css.names.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Scripts - Vendor
==================================================================== */
gulp.task('scripts-vendor', function() {
	return gulp.src(config.js.paths.vendor)
		.pipe(uglify())
		.pipe(concat(config.js.names.vendor))
		.pipe(gulp.dest(config.js.names.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Scripts - Local
==================================================================== */
gulp.task('scripts-local', ['linting'], function() {
	return gulp.src(config.js.paths.local)
		.pipe(uglify())
		.pipe(concat(config.js.names.local))
		.pipe(gulp.dest(config.js.names.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Linting
==================================================================== */
gulp.task('linting', function() {
	return gulp.src(config.js.paths.local)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/* ====================================================================
Images
==================================================================== */
gulp.task('images', function() {
    return gulp.src(config.images.paths)
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
		.pipe(gulp.dest(config.images.names.dest));
});

/* ====================================================================
HTML
==================================================================== */
gulp.task('html', function() {
	return gulp.src(config.html.paths)
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* ====================================================================
Tying everything together...
==================================================================== */
gulp.task('default', ['browser-sync', 'styles-vendor', 'styles-local', 'linting', 'scripts-vendor', 'scripts-local', 'images', 'html'], function() {
	gulp.watch([config.css.paths.local.all], ['styles-vendor', 'styles-local']);
	gulp.watch([config.js.paths.local], ['linting', 'scripts-local']);
	gulp.watch([config.js.paths.vendor], ['scripts-vendor']);
	gulp.watch([config.html.paths], ['html']);
});
