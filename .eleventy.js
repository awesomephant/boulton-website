module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addShortcode("image", function (image) {
        let components = image.src.split('.')
        let filename = components[0]
        let extension = components[1]
        filename = '/assets/images/' + filename;
        return (
            `<picture data-align='${image.align}' style='width: ${image.width}'>
                <source type="image/webp" srcset="${filename}@500w.${extension} 500w, ${filename}@1000w.${extension} 1000w, ${filename}@2000w.${extension} 2000w" alt="${image.alt}">
                <source type="image/png" srcset= "${filename}@500w.${extension} 500w ${filename}@1000w.${extension} 1000w, ${filename}@2000w.${extension} 2000w" alt="${image.alt}">
                <img src="${filename}.${extension}" alt="${image.alt}">
            </picture>`
        );
    });

    eleventyConfig.addPairedShortcode("sticky", function (content) {
        return (
            `<div class='sticky'>${content}</div>`
        );
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "liquid",
        dir: {
            layouts: "_layouts"
        }
    };
};