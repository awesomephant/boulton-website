module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addNunjucksShortcode("image", function (image) {
    let components = image.src.split('.')
    let filename = components[0]
    let extension = components[1]
    filename = '/assets/images/' + filename;
    return (
      `<picture>
        <source type="image/webp" srcset="${filename}@1000w.webp 1000w, ${filename}@2000w.webp 2000w" alt="${image.alt}">
        <source type="image/jpeg" srcset="${filename}@1000w.jpg 1000w, ${filename}@2000w.jpg 2000w" alt="${image.alt}">
        <img src="${filename}.${extension}" alt="${image.alt}">
      </picture>`
      );
  });
  
  return {
    markdownTemplateEngine: "njk",
    dir: {
      layouts: "_layouts"
    }
  };
};