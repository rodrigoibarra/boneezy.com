// Here we hecking go
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("src/css/poke.css");
  eleventyConfig.addPassthroughCopy ("src/fonts");
  return{
    dir:{
      input: "src",
      output: "dist",
    },
  };

};