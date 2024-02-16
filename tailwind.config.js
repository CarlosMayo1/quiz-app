/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				anek: ['Anek Malayalam', 'sans-serif'],
			},
			colors: {
				'color-1': '#11052c',
				'color-2': '#e7e8e9',
				'color-3': '#800080',
				'color-4': '#e0dee3',
				'background-gradient':
					'linear-gradient(90.04deg, #800080 0.03%, #ffc0cb 99.96%)',
			},
		},
	},
	plugins: [],
}
