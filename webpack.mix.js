let mix = require('laravel-mix');
require('laravel-mix-copy-watched');
const tailwindcss = require('tailwindcss');
require('laravel-mix-esbuild');
const web = 'web/assets/src';
const dist = 'web/assets/dist';
// Javascript
mix.js(web + '/js/app.js', dist+'/js/app.js')
    .esbuild();

// CSS
mix.sass(`${web}/styles/main.scss`, `${dist}/css`).options({
    processCssUrls: false,
    postCss: [ tailwindcss ],
});

// Sourcemaps
mix.sourceMaps(true, 'source-map');

// Resources
mix.copyDirectoryWatched([`${web}/images`], `${dist}/images`, { base: 'images' });
// mix.copyDirectoryWatched(['web/assets/src/fonts'], 'web/assets/dist/fonts');

// mix.browserSync({
//     proxy: 'http://pathways.test',
//     files: ['./templates/**/*', './web/assets/dist/**/*']
// });