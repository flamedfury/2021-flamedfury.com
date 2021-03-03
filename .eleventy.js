module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/img');

  //turns of the default of creating permalinks
  // eleventyConfig.setDynamicPermalinks(false);

  /* --- plugins --- */

  // navigation
  eleventyConfig.addPlugin( require('@11ty/eleventy-navigation') );

  // /* --- shortcodes --- */
  // config.addShortcode('content', require('./lib/shortcodes/content.js'));

  return {
      passthroughFileCopy: true,

      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      templateFormats: ["html", "njk", "md"],
      dir: {
          input: "src",
          output: "public"
      }
    };
};