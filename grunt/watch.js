module.exports = {
  compass: {
   files: ['**/*.scss', '*.html'],
   tasks: ['compass'],
   options: {
     spawn: false,
     livereload: true,
   },
  },
  svg: {
   files: ["dev/svg/*.svg"],
   tasks: ["svgstore"],
   options: {
       livereload: true,
   },
  },
}
