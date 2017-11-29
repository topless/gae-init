var fs = require("fs");
var gulp = require("gulp-help")(require("gulp"));
var $ = require("gulp-load-plugins")();
var paths = require("../paths");

gulp.task("npm", false, function() {
  return gulp
    .src("package.json")
    .pipe($.plumber())
    .pipe($.start());
});

gulp.task("pip", false, function() {
  return gulp.src("run.py").pipe(
    $.start([
      {
        match: /run.py$/,
        cmd: "python run.py -d"
      }
    ])
  );
});

gulp.task("zip", false, function() {
  return fs.exists(paths.py.lib_file, function(exists) {
    if (!exists) {
      return fs.exists(paths.py.lib, function(exists) {
        if (exists) {
          return gulp
            .src(paths.py.lib + "/**")
            .pipe($.plumber())
            .pipe($.zip("lib.zip"))
            .pipe(gulp.dest(paths.main));
        }
      });
    }
  });
});

gulp.task("init", false, $.sequence("pip"));
