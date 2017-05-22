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
var sourcemaps = require("gulp-sourcemaps");

var browserifyOpts = package.browserify || {};

var paths = {
    scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
    images: 'client/img/**/*'
};

gulp.task("build", function(){
    var b = browserify(browserifyOpts);
    //20170520：还没找到在package.json中放requre的格式
    b.require('./lib/services/browser-storage', {expose: 'browser-storage'});

    //注意：这里使用gulp.dest()输出时会出现问题，使用process.stdout输出则不会，测试后加入source和buffer急性转换即可
    return b.bundle()
        .pipe(source('common-bundle-'+package.version+'.js')) // gives streaming vinyl file object
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write("."))
        //.pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest("./dist"));


    /*
     在上面的代码中，debug: true是告知Browserify在运行同时生成内联sourcemap用于调试。
     引入gulp-sourcemaps并设置loadMaps: true是为了读取上一步得到的内联sourcemap，并将其转写为一个单独的sourcemap文件。
     vinyl-source-stream用于将Browserify的bundle()的输出转换为Gulp可用的[vinyl][]（一种虚拟文件格式）流。vinyl-buffer用于将vinyl流转化为buffered vinyl文件（gulp-sourcemaps及大部分Gulp插件都需要这种格式）。



     */
});

gulp.task('default', ["build"]);