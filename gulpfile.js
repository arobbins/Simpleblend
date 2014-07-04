/* ====================================================================
Variables
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
			'./**/*.html'
		],
		sass: [
			'css/scss/*.scss'
		],
		imgs: {
			'src' : 'imgs/*',
			'dest' : 'imgs'
		},
		styles: [
			'css/styles.min.css'
		],
		scripts: [
			// Order matters for vendor libs
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

/* ====================================================================
Local Web Server
==================================================================== */

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: "./"
		}
	});
});

/* ====================================================================
Stylesheets
==================================================================== */

gulp.task('styles', function() {
    gulp.src('css/scss/main.scss')
		.pipe(sass({includePaths: ['scss']}))
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream:true
		}));
});

/* ====================================================================
Scripts
==================================================================== */

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
    	stream:true
    }));
});

/* ====================================================================
Images
==================================================================== */

gulp.task('images', function() {
	return gulp.src(paths.imgs.src)
	  .pipe(imagemin({
	      progressive: true,
	      svgoPlugins: [{removeViewBox: false}],
	      use: [
	      	pngcrush(),
	      	svgo()
	      ]
	  }))
	  .pipe(gulp.dest(paths.imgs.dest));
});

/* ====================================================================
Tying everything together...
==================================================================== */

gulp.task('default', ['styles', 'scripts', 'images', 'browser-sync'], function() {
	gulp.watch([paths.sass, paths.scripts, paths.html], ['styles', 'scripts']);
});