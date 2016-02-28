module.exports = {
  imagemin: {
          files: [{
              expand: true,
              cwd: '_dev/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'build/images/'
          }]
      }
  }
