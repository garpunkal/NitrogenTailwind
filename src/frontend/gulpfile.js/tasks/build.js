const gulp = require("gulp");
const globalPaths = require("../../package.json").paths;

gulp.task("build:dist", function (cb) {
    globalPaths.build = globalPaths.dist;
    cb();
});