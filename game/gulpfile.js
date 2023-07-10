const rollup = require("rollup");
//const { series } = require("gulp");
const gulp = require("gulp");
const clean = require("gulp-clean");
const browsersync = require("browser-sync");
const server = browsersync.create();

task("clean", () => {
  return gulp.src("node_nodules").pipe(clean());
});

function reloadServer(cd) {
  server.reload();
  cd();
}

function runServer() {
  server.init({ server: { baseDir: "." } });
}

function watchingFiles() {
  gulp.watch("js/", { events: "all" }, reloadServer);
  gulp.watch("css/", { events: "all" }, reloadServer);
  gulp.watch("*.html", reloadServer);
}

exports.bundle = () => {
  console.log("GULP - Running bundle function");
};

exports.play = () => {
  console.log("GULP - Running play function");
  runServer();
  watchingFiles();
};
