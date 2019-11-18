const gulp = require("gulp");
const srcset = require("gulp-srcset").default;

gulp.task('images', () =>
    gulp.src('assets/images/*.{jpg,png}')
        .pipe(srcset([{
            width: [2000, 1000, 500],
            format: ['jpg', 'webp']
        }], {
            skipOptimization: false
        }))
        .pipe(gulp.dest('_site/assets/images/'))
);