const { exec } = require('child_process');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginDate = require("eleventy-plugin-date");

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');

  /* --- plugins --- */
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
  eleventyConfig.addPlugin(pluginDate);

  // navigation
  eleventyConfig.addPlugin( require('@11ty/eleventy-navigation') );

  // syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.on('afterBuild', () => {
    exec('npx prettier "./public/**/*.{html,js,css}" --write', function(err, stdout, stderr) {
      if (err || stdout || stderr) console.log("eleventy-plugin-prettier logs:")
      err && console.log(err);
      stdout && console.log(stdout);
      stderr && console.log(stderr);
    });
  });

  return {
      passthroughFileCopy: true,

      htmlTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      templateFormats: ["html", "njk", "md"],
      dir: {
          input: "src",
          output: "public"
      }
    };


};