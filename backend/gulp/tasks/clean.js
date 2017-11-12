var del = require("del");
var gulp = require("gulp-help")(require("gulp"));
var paths = require("../paths");

gulp.task(
  "clean",
  "Clean project from temporary files, generated CSS & JS and compiled Python files.",
  function() {
    del("./**/*.pyc");
    del("./**/*.pyo");
    return del("./**/*.~");
  }
);

gulp.task("clean:min", false, function() {
  del(paths["static"].ext);
  return del(paths["static"].min);
});

gulp.task("clean:venv", false, function() {
  del(paths.py.lib);
  del(paths.py.lib_file);
  del(paths.dep.py);
  return del(paths.dep.py_guard);
});

gulp.task(
  "reset",
  'Complete reset of project. Run "npm install" after this procedure.',
  ["clean", "clean:venv"],
  function() {
    return del(paths.dep.node_modules);
  }
);

gulp.task("flush", "Clear local datastore, blobstore, etc.", function() {
  return del(paths.temp.storage);
});
