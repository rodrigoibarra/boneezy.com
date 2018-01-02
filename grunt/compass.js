module.exports = {
  dev: {                   // Target
    options: {              // Target options
      sassDir: '_development/scss/',
      cssDir: 'build/css/',
      outputStyle: 'nested',
      environment: 'development',
    }
  },
  dist: {                   // Target
    options: {              // Target options
      sassDir: '_development/scss/',
      cssDir: 'build/css/',
      outputStyle: 'compressed',
      environment: 'production',
    }
  }
}
