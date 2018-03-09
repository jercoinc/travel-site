var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray - You created a Gulp task.");
});

gulp.task('html', function(){
    console.log("Doing HTML magic.");
});

gulp.task('styles', function(){
    console.log("SASS");
});

gulp.task('watch', function(){
    watch ('./app/index.html',function(){
        gulp.setMaxListeners('html');
    });
    watch ('./app/assets/styles/**/*.css',function(){
        gulp.start('styles');
    });
});