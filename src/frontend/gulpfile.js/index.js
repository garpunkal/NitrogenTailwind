const gulp = require("gulp");
const requireDir = require('require-dir');

requireDir("./tasks");

gulp.task('default',
    gulp.series([
        "env:development",
        "clean:build",
        gulp.parallel(
            "html",
            "stylesheets",
            "images",
            "scripts",
            "fonts"
        ),
        "serve",
        "watch"
    ]));

gulp.task('build',
    gulp.series([
        "env:production",
        "build:dist",
        "clean:production",
        gulp.parallel(
            "html",
            "stylesheets",
            "images",
            "scripts",
            "fonts"
        )      
    ]));

gulp.task('migrate',
    gulp.series([
        "env:production",
        "build:dist",
        "clean:production",
        gulp.parallel(
            "html",
            "stylesheets",
            "images",
            "scripts",
            "fonts"
        ),
        "migrate"
    ]));