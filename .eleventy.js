// Here we hecking go
module.exports = function(eleventyConfig){
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
          input: 'src',
          output: 'dist',
          includes: "_includes",
          layouts: "layouts"
        }
      };
};