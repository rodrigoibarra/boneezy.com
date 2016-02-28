module.exports = function(grunt) {

  require('load-grunt-config')(grunt);
  require("load-grunt-tasks")(grunt);


  grunt.registerTask('serve', ["shell:jekyllServe"]);
  grunt.registerTask("default", ['uglify', 'compass:dev', "watch"]);
  grunt.registerTask("deploy", ['compass:dist', 'imagemin', "uglify"]);
  grunt.registerTask('ship', ['uglify', 'compass:dist', 'svgstore', 'shell:jekyllDeploy'])
};
