var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

var config = {
    sassPath: './assets/sass',
    bowerDir: './bower_components'
}

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function () {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('fonts', function () {
    return gulp.src(config.bowerDir + '/Han/font/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function () {
    return sass(config.sassPath + '/style.scss', {
        style: 'compressed',
        loadPath: [
            config.sassPath,
            config.bowerDir + '/bootstrap/scss',
            config.bowerDir + '/font-awesome/scss',
            config.bowerDir + '/Han'
        ]
    })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(gulp.dest('./public/css'));
});

 
gulp.task('js', function() {
  gulp.src([
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/Han/dist/han.min.js'
    ])
    .pipe(concat("all.js"))
    .pipe(minify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'fonts', 'css']);