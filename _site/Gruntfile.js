module.exports = function(grunt) {

    require('load-grunt-config')(grunt);
    require("load-grunt-tasks")(grunt);
  // Default task(s).
  // needs a ton of work...

    grunt.registerTask('serve', ['shell:jekyllServe']);
    grunt.registerTask('build', ['uglify','compass:dev', 'shell:jekyllBuild']);
    grunt.registerTask('default', ['uglify', 'compass:dev', 'svgstore', 'shell:jekyllBuild', 'watch']);
    grunt.registerTask('test', ['build', 'browserSync', 'watch']);
    grunt.registerTask('ship', ['uglify', 'compass:dist', 'svgstore', 'shell:jekyllDeploy'])


};
