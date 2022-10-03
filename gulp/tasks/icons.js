export const icons = () => {
   return app.gulp.src(app.path.src.icons)
      .pipe(app.gulp.dest(app.path.build.icons))
}