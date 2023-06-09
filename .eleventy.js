const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Return your Object options:

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  });
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
