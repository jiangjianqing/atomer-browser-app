/**
 * Created by jjq on 5/18/17.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var package = require('./package.json');

//解决browserify + gulp 的注意点 ： Stream 转换
//vinyl-source-stream + vinyl-buffer
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var browserifyOpts = package.browserify || {};

var paths = {
    scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
    images: 'client/img/**/*'
};

gulp.task("build", function(){
    var b = browserify(browserifyOpts);
    //注意：这里使用gulp.dest()输出时会出现问题，使用process.stdout输出则不会，测试后加入source和buffer急性转换即可
    return b.bundle()
        .pipe(source('common.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        //.pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest("./dist"));
});

gulp.task('default', ["build"]);