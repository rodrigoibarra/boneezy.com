// Here we hecking go
module.exports = function (eleventyConfig) {

eleventyConfig.addPlugin(require('./config/browsersyncConfig.js'));
eleventyConfig.addPlugin(require('./config/markdownConfig.js'));
eleventyConfig.addPlugin(require('./config/photoCollections.js'));
eleventyConfig.addPassthroughCopy ("src/css/poke.css");
eleventyConfig.addPassthroughCopy ("src/fonts");
eleventyConfig.addPassthroughCopy ("src/img");

  return{
    dir:{
      input: "src",
      output: "dist",
    },
  };
};


