const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const pxtorem = require('gulp-pxtorem');
const strip = require('gulp-strip-comments');

// const requirejsOptimize = require('gulp-requirejs-optimize');


//delete dist folder 
function clean(callback) {
  del('dist');
  return cache.clearAll(callback)
}

//realod browser's page
function reload() {
  browserSync.reload()
  done();
}

//move pages.html files to dist folder
function html() {
  return gulp.src('src/**/*.html')
  .pipe(strip())
  .pipe(gulp.dest('dist'))
}


//move the main scss file to dist/css/style.css
function scss() {

  const opts = {
    propWhiteList: [
      'font-size',
      'margin',
      'padding',
      'border',
      'width',
      'height',
      'transform',
      'min-width',
      'top',
      'left',
      'bottom',
      'right',
      'padding-top',
      'padding-bottom',
      'padding-left',
      'padding-right',
      'margin-top',
      'margin-left',
      'margin-right',
      'margin-bottom',
      'min-width',
      'min-heigth',
      'max-width',
      'max-height',
      'perspective',
      'border-radius',
      'border',
      'border-right',
      'border-left',
      'border-bottom',
      'border-top',
      'letter-spacing'
    ] 
  };
  return gulp.src('src/scss/*.scss')
  .pipe(concat('style.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(pxtorem(opts))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(uglifycss({
    "uglyComments": false
  }))
  .pipe(gulp.dest('dist/css'))
}

//move js files to dist/js
function js() {
  return gulp.src(['src/js/*.js', '!src/js/cursor.js'])
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
}

//move images to dist folder
function images() {
  return gulp.src('src/assets/**/*.+(png|jpg|gif|svg|pdf)')
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

//static server
function browser() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })

  gulp.watch('src/**/*.scss', series(scss, reload))
  gulp.watch('src/**/*.js', series(js, reload))
  gulp.watch('src/**/*.html', series(html, reload))
  gulp.watch('src/**/*.+(woff|woff2)', series(fonts, reload))
  gulp.watch('src/**/*.+(png|jpg|gif|svg|pdf)', series(images, reload))
}


//watch changes

function watch() {
  gulp.watch('src/**/*.scss', series(scss, reload))
  gulp.watch('src/**/*.js', series(js, reload))
  gulp.watch('src/**/*.html', series(html, reload))
  gulp.watch('src/**/*.+(woff|woff2)', series(fonts, reload))
  gulp.watch('src/**/*.+(png|jpg|gif|svg|pdf)', series(images, reload))
}


exports.clean = clean;

exports.dev = series(clean, html, scss, js, images, fonts, browser);
exports.build = series(html, scss, js, images, fonts);