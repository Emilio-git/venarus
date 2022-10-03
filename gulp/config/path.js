import * as nodePath from "path";

const root = nodePath.basename(nodePath.resolve());

console.log(root);
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   build: {
      images: `${buildFolder}/assets/img`,
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      icons: `${buildFolder}/assets/icons`,
   },
   src: {
      images: `${srcFolder}/assets/img/*.{jpg, jpeg, png, gif, webp}`,
      svg: `${srcFolder}/assets/**/*.svg`,
      js: `${srcFolder}/js/app.js`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      icons: `${srcFolder}/assets/icons/**/*.*`,
   },
   watch: {
      images: `${srcFolder}/assets/**/*.{jpg, jpeg, png, gif, webp}`,
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      icons: `${srcFolder}/assets/icons/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder:  srcFolder,
   root: root,
}