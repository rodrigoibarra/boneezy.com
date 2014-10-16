module.exports = {
  site: {
   files: ["index.html", "_layouts/*.html", "rants/_posts/*.md", "_projects/*.md", "_includes/*.html"],
   tasks: ["shell:jekyllBuild"],
   options: {
     livereload: true,
   },
  },
  compass: {
   files: ['**/*.scss', '*.html'],
   tasks: ['compass', "shell:jekyllBuild", 'autoprefixer'],
   options: {
     spawn: false,
     livereload: true,
   },
  },
  svg: {
   files: ["_development/svg/*.svg"],
   tasks: ["svgstore", "shell:jekyllBuild"],
   options: {
       livereload: true,
   },
  },
}
