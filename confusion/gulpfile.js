var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    del = require('del');

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['build']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin', 'copyfonts');
});

// Usemin Task
gulp.task('usemin', ['jshint'], function() {
    return gulp.src('./app/menu.html')
        .pipe(usemin({
            css: [minifycss(), rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('build/'));
});

// Images
gulp.task('imagemin', function() {
    return del(['build/images']), gulp.src('app/images/**/*')
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/images'));
});

// Copy fonts
gulp.task('copyfonts', ['clean'], function() {
    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./build/fonts'));
    gulp.src('./bower_components/bootstrap/build/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./build/fonts'));
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
    // Watch .js files
    gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
    // Watch image files
    gulp.watch('app/images/**/*', ['imagemin']);
});

//Browser-sync
gulp.task('browser-sync', ['default'], function() {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/images/**/*.png',
        'app/scripts/**/*.js',
        'build/**/*'
    ];
    browserSync.init(files, {
        server: {
            baseDir: "build",
            index: "menu.html"
        },
        port: 3010
    });
    // Watch any files in build/, reload on change
    gulp.watch(['build/**']).on('change', browserSync.reload);
});