//to make sure we have the gulp module in order to run series and parallel functions
var gulp = require('gulp');
const { series } = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var pxtorem = require('gulp-pxtorem');
var file = require('gulp-file');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
// var requirejsOptimize = require('gulp-requirejs-optimize');



//delete dist folder 
function clean(callback) {
  del('dist');
  return cache.clearAll(callback)
}

//move pages.html files to dist folder
function html() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'))
}

//move the main scss file to dist/css/style.css
function scss() {
  return gulp.src('src/scss/*.scss')
  .pipe(concat('style.css'))
  .pipe(pxtorem())
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({
    "uglyComments": false
  }))
  .pipe(gulp.dest('dist/css'))
}

//move js files to dist/js
function js() {
  return gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  // .pipe(requirejsOptimize({
  //   optimize: 'none',
  // }))                               
  // .pipe(uglify())              //doesn't minify JS correctly (doesn't support classes ?)
  .pipe(gulp.dest('dist/js'))
}

//move images to dist folder
function images() {
  return gulp.src('src/assets/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/assets'))
}


//move fonts to dist folder
function fonts () {
  return gulp.src('src/assets/**/*.+(woff|woff2)')
  .pipe(gulp.dest('dist/assets'))
}

exports.html = html;
exports.clean = clean;
exports.scss = scss;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.dev = series(clean, html, scss, js, images, fonts);
exports.build = series(html, scss, js, images, fonts);



// // Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./dist"
//         }
//     });

//     //to watch changes once the server is running
//     gulp.watch("src/**/*.scss", gulp.series('sass'));
//     gulp.watch("src/**/*.html").on('change', browserSync.reload);

// });


// gulp.task('clean-not-img', function(callback){
//   del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
// });

// gulp.task('watch', gulp.series('sass', 'browser-sync'), function () {
//   gulp.watch('src/**/*.scss', gulp.series('sass')); 
// });
