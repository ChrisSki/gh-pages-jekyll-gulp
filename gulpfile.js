var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

/**
* Build the Jekyll Site
*/
gulp.task('jekyll-build', function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});

/**
* Rebuild Jekyll & do page reload
*/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
* Wait for jekyll-build, then launch the Server
*/
gulp.task('browser-sync', ['sass', 'js', 'assets', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
* Compile files from js into both _site/js (for live injecting) and site (for future jekyll builds)
*/
gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('js'));
});

/**
* Compile files from _sass into both _site/css (for live injecting) and site (for future jekyll builds)
*/
gulp.task('sass', function () {
  return gulp.src('_sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

/**
 * Compress assets only on initial build
 */
gulp.task('assets', function () {
  return gulp.src('assets/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('assets'));
});

/**
* Watch scss files for changes & recompile
* Watch html/md files, run jekyll & reload BrowserSync
*/
gulp.task('watch', function () {
  gulp.watch('_sass/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
* Default task, running just `gulp` will compile the sass,
* compile the jekyll site, launch BrowserSync & watch files.
*/
gulp.task('default', ['browser-sync', 'watch']);
