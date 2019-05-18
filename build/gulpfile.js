const gulp = require('gulp');
// Minify and Optimize Files 
const minHtml = require('gulp-htmlmin');
const minCss = require('gulp-csso');
const minJs = require('gulp-uglify');
const minImg = require('gulp-imagemin');
const webp = require('gulp-webp');
// Secondary Functions
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
// Sass Compiler
var sass = require('gulp-sass');
sass.compiler = require('node-sass'); 


// HTML Files
gulp.task('html', async ()=>{
  gulp.src('src/*.html')
    .pipe(minHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// JS Files
gulp.task('scripts', async ()=>{
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minJs())
    .pipe(gulp.dest('dist/assets/js'));
});

// Bootstrap CSS Files
gulp.task('bstscss', async()=>{
  gulp.src('src/bstscss/bootstrap.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(rename({suffix:'.min'}))
    .pipe(minCss())
    .pipe(gulp.dest('dist/assets/css'));
})

// Custom CSS Files
gulp.task('scss', async()=>{
  gulp.src('src/scss/main.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(rename({suffix:'.min'}))
    .pipe(minCss())
    .pipe(gulp.dest('dist/assets/css'));
})

// Optimized Images
gulp.task('image', async()=>{
  gulp.src('src/imgs/*')
  .pipe(minImg([
    minImg.gifsicle({interlaced: true}),
    minImg.jpegtran({progressive: true}),
    minImg.optipng({optimizationLevel: 5}),
    minImg.svgo({
      plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(gulp.dest('dist/assets/imgs/fallback'));
});

// Genrate Webp Images
gulp.task('webp', async()=>{
  gulp.src('src/imgs/*')
    .pipe(webp())
    .pipe(gulp.dest('dist/assets/imgs/webp'))
});

// Initialize All Tasks
gulp.task('default', gulp.parallel([
  'html','scripts','bstscss','scss', 'image', 'webp'
]));

// Watch Files - Exceute on Change
gulp.task('watch', async ()=>{
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/bstscss/**/*.scss', gulp.series('bstscss'));
  gulp.watch('src/scss/*.scss', gulp.series('scss'));
  gulp.watch('src/imgs/*', gulp.series('image'));
  gulp.watch('src/imgs/*', gulp.series('webp'));
});