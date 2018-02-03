const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssImport = require('postcss-import');
const cssMixins = require('postcss-mixins');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/master.css')
             .pipe(postcss([cssImport, cssMixins, precss, autoprefixer]))
             .on('error', (error) => {
               console.log(err.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/assets/master/styles/'));
});
