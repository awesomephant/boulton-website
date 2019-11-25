module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("favicons");

    eleventyConfig.addShortcode("image", function (image) {
        let components = image.src.split('.')
        let filename = components[0]
        let extension = components[1]
        let width = image.width;
        if (width === "100%"){
            width = "calc(100% + 150px - 13.5px)"
        }
        filename = '/assets/images/' + filename;
        return (
            `<picture data-align='${image.align}' style='width: ${width}'>
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
        htmlTemplateEngine: "njk",
        dir: {
            layouts: "_layouts"
        }
    };
};