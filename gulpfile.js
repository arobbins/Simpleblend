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
	prefix = require('gulp-autoprefixer'),
	merge = require('merge-stream'),
	sourcemaps = require('gulp-sourcemaps');
	config = {
		html: {
			paths: [
				'./app/index.html',
				'./app/views/*.html'
			]
		},
		css: {
			names: {
				vendor: 'vendor.min.css',
				local: 'local.min.css',
				dest: 'dist/css'
			},
			paths: {
				vendor: [
					'app/css/vendor/angular-carousel.min.css'
				],
				local: {
					entry: 'app/css/scss/main.scss',
					all: 'app/css/scss/*.scss'
				}
			}
		},
		js: {
			names: {
				vendor: 'vendor.min.js',
				local: 'local.min.js',
				dest: 'dist/js'
			},
			paths: {
				vendor: [
					// Order matters here
					'app/js/vendor/angular.min.js',
					'app/js/vendor/angular-ui-router.min.js',
					'app/js/vendor/angular-scroll.min.js',
					'app/js/vendor/ui-utils.min.js',
					'app/js/vendor/svg.logos.js',
					'app/js/vendor/angularSlideables.js',
					'app/js/vendor/angular-animate.js',
					'app/js/vendor/angular-touch.min.js',
					'app/js/vendor/angular-carousel.min.js',
					'app/js/vendor/appscroll.js',
					'app/js/vendor/lazy-image.min.js'
				],
				local: [
					'app/js/app/app.js',
					'app/js/app/controllers/*.js',
					'app/js/app/services/*.js',
					'app/js/app/directives/*.js'
				]
			}
		},
		images: {
			paths: [
				'app/images/*'
			],
			names: {
				dest: 'dist/images'
			}
		}
	};

/* ====================================================================
Server
==================================================================== */
gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: "./dist"
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

var options = {
	autoprefixer: {
  		map: true,
  		from: 'scss',
  		to: 'local.min.css'
	}
};

/* ====================================================================
Styles - Local
==================================================================== */
gulp.task('styles-local', function() {
	gulp.src(config.css.paths.local.entry)
		.pipe(sass({
			errLogToConsole: true,
			sourceMap: 'scss',
			sourceComments: 'map',
			includePaths: ['scss']
		}))
		.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", options.autoprefixer))
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
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concat(config.js.names.local))
		.pipe(sourcemaps.write())
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

	var htmlEntry = gulp.src(config.html.paths[0])
		.pipe(gulp.dest('./dist'));
	var htmlviews = gulp.src(config.html.paths[1])
		.pipe(gulp.dest('./dist/views'));

	return merge(htmlEntry, htmlviews)
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
