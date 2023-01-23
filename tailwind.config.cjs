/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				meadow: {
					bg: '#E6F4F1',
					text: '#454655',

					lighter: '#1EDDA4',
					light: '#12D5F3',
					DEFAULT: '#2363D1',
					dark: '#5D60D2',
				},
			},
			transitionProperty: {
				spacing: 'margin, padding',
			},
		},
	},
	plugins: [],
};
