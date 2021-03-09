module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/img');

  /* --- plugins --- */
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  // navigation
  eleventyConfig.addPlugin( require('@11ty/eleventy-navigation') );

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