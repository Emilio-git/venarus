import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'; // для переименовки файла в .min.css

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp.src(app.path.src.scss, {sourcemaps: true})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(sass({
         outputStyle: 'expanded' // изначальный сталь файла
      }))
      .pipe(groupCssMediaQueries())
      .pipe(autoprefixer({
         grid: true,
         overrideBrowserlist: ["last 3 versions"],
         cascade: true,
      }))
      .pipe(app.plugins.replace(/@img\//g, '../assets/img/'))
      .pipe(app.plugins.replace(/@svg\//g, '../assets/icons/'))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(rename({
         extname: ".min.css"
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
}