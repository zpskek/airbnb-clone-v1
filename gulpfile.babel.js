import gulp from "gulp";
import postCSS from "gulp-postcss";
import sass from "gulp-sass";
import minify from "gulp-csso";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export const css = () => {
  sass.compiler = require("node-sass");
  return gulp
    .src("assets/scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postCSS([tailwindcss, autoprefixer]))
    .pipe(minify())
    .pipe(gulp.dest("static/css"));
};
