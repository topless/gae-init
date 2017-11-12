var gulp = require('gulp-help')(require('gulp'));
var $ = require('gulp-load-plugins')();

gulp.task('watch', false, function() {
  $.watch('requirements.txt', function() {
    return $.sequence('pip')();
  });
  return $.watch('package.json', function() {
    return $.sequence('npm')();
  });
});
