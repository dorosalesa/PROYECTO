const rollup = require('rollup');
const gulp = require("gulp");
const cleam = require("gulp-clean");
const browsersync = require('browser-sync');
const server = browsersync.create();


exports.bundle=() =>{
    console.log('GULP - Running bundle function');};

exports.play=()=>{
    console.log('GULP - Running play function');
    server.init({
        server:{
            baseDir:'.',
        }
    });
};

gulp.task('clean', function(){
    return gulp.src("js/main.js").pipe(clean());
});