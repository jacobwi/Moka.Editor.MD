const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

// Define the JavaScript files in the order they need to be concatenated
const jsFiles = [
    'Resources/js/zepto.min.js',
    'Resources/js/editormd.min.js',
    'Resources/js/lang/en.js',
    'Resources/js/editorMdInterop.js',
];

// Define the CSS files in the order they need to be concatenated
const cssFiles = [
    'Resources/css/editor.md/editormd.css',
    // Add any other CSS files you want to include in the bundle
];

// Gulp task to concatenate and minify JS files
gulp.task('scripts', function() {
    return gulp.src(jsFiles) // Source the files
        .pipe(concat('moka.bundle.js')) // Concatenate to a single file
        .pipe(uglify()) // Minify the concatenated file
        .pipe(rename({ suffix: '.min' })) // Rename the output file to include .min
        .pipe(gulp.dest('wwwroot/js/')); // Output the file in the wwwroot/js directory
});


// Gulp task to concatenate and minify CSS files
gulp.task('styles', function() {
    return gulp.src(cssFiles) // Source the files
        .pipe(concat('moka.bundle.css')) // Concatenate to a single file
        .pipe(cssmin()) // Minify the concatenated file
        .pipe(rename({ suffix: '.min' })) // Rename the output file to include .min
        .pipe(gulp.dest('wwwroot/css/')); // Output the file in the wwwroot/css directory
});

// Gulp task to copy Font Awesome fonts
gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*') // Source the font files
        .pipe(gulp.dest('wwwroot/fonts/')); // Copy to wwwroot/fonts directory
});

// Gulp task to copy Font Awesome fonts
gulp.task('codemirror', function() {
    return gulp.src('node_modules/editor.md/lib/**/*') // Source the font files
        .pipe(gulp.dest('wwwroot/lib/editor.md/')); // Copy to wwwroot/fonts directory
});

// Default Gulp task
gulp.task('default', gulp.series('scripts', 'styles', 'fonts', 'codemirror'));

// Watch task for changes in JS and CSS
gulp.task('watch', function() {
    gulp.watch('wwwroot/js/**/*.js', gulp.series('scripts'));
    gulp.watch('wwwroot/css/**/*.css', gulp.series('styles'));
});
