
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var watchify = require('watchify');
//var uglify      = require('gulp-uglify');
//var sourcemaps  = require('gulp-sourcemaps');
//var livereload  = require('gulp-livereload');
 
function scripts(watch) {
  var bundler, rebundle;
  bundler = browserify('./src/js/app.js', {
    basedir: __dirname, 
    debug: false, 
    cache: {}, // required for watchify
    packageCache: {}, // required for watchify
    fullPaths: watch // required to be true only for watchify
  });

  if(watch) {
    bundler = watchify(bundler) 
  }

  bundler.transform(reactify);

  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', handleError('Browserify'));
    stream = stream.pipe(source('bundle.js'));
    return stream.pipe(gulp.dest('./dist/js'));
  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('scripts', function() {
  return scripts(false);
});

gulp.task('watch', function() {
  return scripts(true);
});