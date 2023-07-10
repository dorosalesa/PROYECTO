const rollup = require("rollup");
const { watch, series } = require("gulp");
const gulp = require("gulp");
const clean = require("gulp-clean");
const browsersync = require("browser-sync");
const server = browsersync.create();

gulp.task("clean", () => {
  return gulp.src("node_nodules").pipe(clean());
});

function reloadServer(cd) {
  server.reload();
  cd();
}

function runServer() {
  server.init({ server: { baseDir: '.' } });
}

function watchingFiles() {
  watch("js/", { events: "all" });
}

exports.bundle = () => {
  console.log("GULP - Running bundle function");
};

exports.play = () => {
  console.log("GULP - Running play function");
  runServer();
  watchingFiles();
};
