const gulp = require("gulp");
const srcset = require("gulp-srcset").default;
const using = require('gulp-using');
const mozjpeg = require('imagemin-mozjpeg');
const optipng = require('imagemin-optipng');
const pngquant = require('imagemin-pngquant');

const imageDest = '_site/assets/'
const sizes = [2000, 1000, 500]

gulp.task('images', () =>
    gulp.src('assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}')
        .pipe(srcset([
            {
                processing: {
                    jpg: {
                        quality: 90
                    }
                },
                optimization: {
                    jpg:  mozjpeg({
                        quality: 90
                    }),
                    png:  pngquant({
                        quality: [.7, .9]
                    }),
                },
                width: sizes,
                // Change the following to "skipOptimization: true" to speed up conversion.
                skipOptimization: false,
            }
        ]))
        .pipe(using({ prefix: 'Writing', color: 'yellow' }))
        .pipe(gulp.dest(imageDest))
);