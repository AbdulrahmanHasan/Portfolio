const
  gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  imageminfy = require('gulp-image'),
  livereload = require('gulp-livereload'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes');

// to watch php file changes and make browser reload
gulp.task('php_watch', () => {
  gulp.src('./index.php')
    .pipe(livereload());
});
// to watch php file changes and copy it to dist file

gulp.task('copy-php', () => {
  gulp.src('./index.php')
    .pipe(gulp.dest('./dist'));
});
// to watch image folder changes and copy it to dist file

gulp.task('copy-image', () => {
  gulp.src('images/min/*')
    .pipe(gulp.dest('dist/images/min'));
});
// to watch javascript folder changes and copy it to dist file
gulp.task('scripts', () => {
  gulp.src(['js/jquery.js',
    'js/popper.js'    , 'js/bootstrap.min.js',
    'js/tuxsudo.js'   , 'js/jquery-letterfx.min.js',
    'js/chart.min.js' , 'js/circle chart.js',
    'js/javascript.js', 'js/usedCharts.js'])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});
// to watch javascript folder changes and copy it to dist file
gulp.task('scripts-dest', () => {
  gulp.src(['js/all'])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

// to minfy the image
gulp.task('image', () => {
  gulp.src('images/*')
    .pipe(imageminfy())
    .pipe(gulp.dest('images/min'))
    .pipe(livereload());
});
// to watch scss file changes and minfy it in css file, write autoprefixer automaticlly, make browser reload

gulp.task('sass',  () => {
  return sass('sass/styles.scss', {
    sourcemap: true,
    style: 'compressed'
  })
    .on('error', err => {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer ({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});


gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(['js/jquery.js',
    'js/popper.js'    , 'js/bootstrap.min.js',
    'js/tuxsudo.js'   , 'js/jquery-letterfx.min.js',
    'js/chart.min.js' , 'js/circle chart.js',
    'js/javascript.js', 'js/usedCharts.js'], ['scripts']);
  gulp.watch(['js/all'], ['scripts-dest']);
  gulp.watch(['sass/*'], ['sass']);
  gulp.watch(['images/*'], ['image']);
  gulp.watch(['index.php'], ['php_watch']);
  gulp.watch(['./index.php'], ['copy-php']);
});

gulp.task('default', ['sass','scripts', 'copy-php','copy-image', 'watch']);
