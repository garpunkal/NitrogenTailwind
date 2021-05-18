const gulp = require("gulp");

gulp.task("env:development", function (cb) {
    process.env.NODE_ENV = "development";
    cb();
});

gulp.task("env:production", function (cb) {
    process.env.NODE_ENV = "production";   
    cb(); 
});