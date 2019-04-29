var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync').create();

var config = {
    sassPath: './assets/sass',
    bowerDir: './bower_components'
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });
});

gulp.task('publish', function() {
    return gulp.src(['./public/**/*']).pipe(gulp.dest('../sites/bootstrap-han'));
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

gulp.task('default', ['icons', 'fonts', 'css']);