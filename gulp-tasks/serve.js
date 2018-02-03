const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('./app/index.html', () => {
    browserSync.reload();
  });

  gulp.watch('./app/assets/styles/**/*.css', () => {
    gulp.start('style-inject');
  });
});

gulp.task('style-inject', ['styles'], () => {
  return gulp.src('./app/assets/master/styles/master.css')
             .pipe(browserSync.stream());
})

gulp.task('default', ['serve']);
