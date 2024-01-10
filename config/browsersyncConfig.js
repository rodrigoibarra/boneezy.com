module.exports = eleventyConfig => {
  // using Browsersync instead of default --serve
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    port: 8080,
    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
  })
};