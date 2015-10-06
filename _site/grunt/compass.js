module.exports = {
  dev: {                   // Target
    options: {              // Target options
      sassDir: '_development/scss/',
      cssDir: 'build/css/',
      environment: 'development',
    }
  },
  dist: {                   // Target
    options: {              // Target options
      sassDir: '_development/scss/',
      cssDir: 'build/css/',
      environment: 'production',
    }
  }
}
