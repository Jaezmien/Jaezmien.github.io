/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				meadow: {
					bg: '#E6F4F1',
					text: '#454655',

					light: '#76DDEA',
					DEFAULT: '#76A3EA',
					dark: '#8376EA',
				},
			},
			transitionProperty: {
				spacing: 'margin, padding',
			},
		},
	},
	plugins: [],
};
