var gulp = require('gulp');
var del = require('del');

var opt = require('../options.json');

exports.copy = function (cb) {
  return function () {
    gulp.src(opt.src + '/less/fonts/**')
     .pipe(gulp.dest(opt.dest + '/assets/css/fonts/'));
    gulp.src(opt.src + '/img/**')
     .pipe(gulp.dest(opt.dest + '/assets/img/'));
  }
};

exports.clean = function () {
  return function (cb) {
    del(['./dist'],cb);
  }
};

exports.watch = function () {
  return function () {
    gulp.watch(opt.src + '/less/**/*.less', ['styles']);
    gulp.watch(opt.src + '/js/**/*.js', ['browserify'])
  }
};
