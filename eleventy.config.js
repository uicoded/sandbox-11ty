module.exports = function(eleventyConfig) {

  return {
		dir: {
			input: "content",             // default: "."
			output: "build",              // default: "_site"
      includes: "../_includes",     // default: "_includes"
			data: "../_data",             // default: "_data"
		}
	}

}