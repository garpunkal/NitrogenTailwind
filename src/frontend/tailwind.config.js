const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},	
		extend: {		
			colors: {
				"brand-primary": "#40aaf5",
				"brand-secondary": "#cccccc",
			},
			spacing: {
				"96": "24rem",
				"128": "32rem",
			},
			height: (theme) => ({
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
				"screen/75": "75vh",
			})
		}
	},
	variants: {
		animation: ['responsive', 'hover'],
		visibility: ['hover', 'focus']
	},
	purge: {	
		content:
			[
				'src/**/*.njk',
				'src/**/*.html',
				'src/**/*.js',
			],
		options: {
			safelist: ["grid-cols-3", "list-outside", "list-disc"]
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	]
}