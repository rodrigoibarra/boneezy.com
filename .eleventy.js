// Here we hecking go
module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
     eleventyConfig.addPassthroughCopy("admin/config.yml");
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
      });
  
    return{
        addPassthroughfileCopy: true,
        dir: {
            includes: "_includes",
            layouts: "_layouts",
            posts: "_posts"
        }
    }

};