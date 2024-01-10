module.exports = eleventyConfig => {
  const fg = require('fast-glob');
  const ColoradoTrip = fg.sync(['**/Chilling-in-Colorado/*', '!**/dist']);
  eleventyConfig.addCollection('CiC', function(collection) {
      return ColoradoTrip;
    });
    const viveLatino = fg.sync(['**/viveLatino/*', '!**/dist']);
  eleventyConfig.addCollection('VL', function(collection) {
      return viveLatino;
    });
};