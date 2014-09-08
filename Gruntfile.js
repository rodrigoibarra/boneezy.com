module.exports = function(grunt) {

    require('load-grunt-config')(grunt);
    require("load-grunt-tasks")(grunt);
  // Default task(s).
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask('default', ['uglify', 'compass', "svgstore", "shell:jekyllBuild", "watch"]);

};
