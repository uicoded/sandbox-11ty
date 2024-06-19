module.exports = function (eleventyConfig) {

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/public"
  });

  return {
    dir: {
      input: "content", // default: "."
      output: "build", // default: "_site"
      includes: "../_includes", // default: "_includes"
      data: "../_data", // default: "_data"
    },
  };
};
