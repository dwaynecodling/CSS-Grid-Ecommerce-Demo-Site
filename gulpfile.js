var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function () {

    console.log("you created a gulp task")

});

gulp.task('html', function () {
    console.log("hello this works")

});

gulp.task('watch', function () {
   watch('./app/index.html', function () {
     gulp.start('html');
   });
});