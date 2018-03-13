var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('js/javascript.js')
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
    return sass('sass/styles.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('js/*', ['js']);
  gulp.watch(['sass/*'], ['sass']);
});

// gulp.task('webserver', function() {
//     gulp.src('builds/sassEssentials/')
//         .pipe(webserver({
//             livereload: true,
//             open: true
//         }));
// });

// gulp.task('default', ['sass', 'watch', 'webserver']);
gulp.task('default', ['sass', 'watch']);
