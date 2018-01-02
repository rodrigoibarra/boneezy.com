module.exports = function(grunt) {

  require('load-grunt-config')(grunt);
  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ['compass:dev', "watch"]);
  grunt.registerTask("deploy", ['compass:dist', 'imagemin']);
};
