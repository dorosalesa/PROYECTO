const rollup = require('rollup');
const gulp = require("gulp");
const cleam = require("gulp-clean");


exports.bundle=() =>{
    console.log('GULP - Running bundle function');};

exports.play=()=>{
    console.log('GULP - Running play function');
};

gulp.task('clean', function(){
    return gulp.src("js/main.js").pipe(clean());
});