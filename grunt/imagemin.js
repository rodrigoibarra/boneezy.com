module.exports = {
  imagemin: {
        options: {
          optimizationLevel: 7
        },
        files: [{
           expand: true,
           cwd: '_development/images/',
           src: ['*.{png,jpg}'],
           dest: 'build/images/'
        }]
      }
  }
