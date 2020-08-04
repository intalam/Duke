'use strict';

const gulp = require('gulp');

const shared = './shared/**/*';
const destinations = ['../ReactNativeExpo/shared/', '../react-js/src/shared/'];

function watch() {
    gulp.watch(shared, copyShared);
}

function copyShared() {
    return gulp.src([
        shared,
    ])
    .pipe(gulp.dest(destinations[0]))
	.pipe(gulp.dest(destinations[1]));
}

const build = gulp.series(copyShared, watch);

exports.watch = watch;
exports.default = build;


