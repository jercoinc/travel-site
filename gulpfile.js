var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
nested = require('postcss-nested');

gulp.task('default', function(){
    console.log("Hooray - You created a Gulp task.");
});

gulp.task('html', function(){
    console.log("Doing HTML magic.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer ]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    browserSync.init({
        notify: true,
        server: {
            baseDir: "app"
        }
    });
    watch ('./app/index.html',function(){
        browserSync.reload();
    });
    watch ('./app/assets/styles/**/*.css',function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream())

});
