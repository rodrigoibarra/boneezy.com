module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['_development/libs/*.js','_development/js/global.js'],
        dest: 'build/js/global.min.js'
      }
    },
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: '_development/scss/',
            cssDir: 'build/css/',
            environment: 'development'
          }
        }
      },

      watch: {
          css: {
            files: ['**/*.scss', '*.html'],
            tasks: ['compass'],
            options: {
              livereload: true,
            },
          },
      },

      connect: {
        uses_defaults: {}
      }

  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'compass']);

};
