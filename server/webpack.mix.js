const mix = require('laravel-mix')
const path = require('path')
const tailwindcss = require('tailwindcss')

mix.browserSync('http://localhost:80')
	.ts('resources/ts/app.tsx', 'public/js')
	.react()
	.sass('resources/sass/app.scss', 'public/css')
	.options({
		postCss: [tailwindcss('./tailwind.config.js')],
	})
	.version()

mix.webpackConfig({
	resolve: {
		alias: {
			'@': path.resolve('resources/ts'),
			'@@': path.resolve('resources/ts/components'),
		},
	},
})
