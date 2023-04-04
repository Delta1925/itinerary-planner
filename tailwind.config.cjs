/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Alkatra', ...defaultTheme.fontFamily.sans],
		},
		borderWidth: {
			'standard': '0.3vw'
		},
		extend: {
		}
	},
	plugins: [],
}
