module.exports = {
	mode: 'jit',
	purge: ['./public/js/app.js', './resources/js/**/*.*', './resources/views/**/*.*'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			// prettier-ignore
			colors: {
				'custom-blue': '#1e90ff',
				'custom-light-blue': '#87cefa',
				'custom-green': '#32cd32',
				'custom-yellow': '#ffd700',
				'custom-orange': '#ffa500',
				'custom-red': '#c30000',
				'custom-pink': '#ffc0cb',
				'theme': '#3C4C64',
				'theme-lighten': '#4d6180',
				'theme-lighten-2': '#607aa1',
				'theme-darken': '#2f3b4e',
				'sidebar-bg': '#2f3b4e',
				'sidebar-link': '#4d6180',
				'sidebar-link-hover': '#607aa1',
				'sidebar-active': '#3C4C64',
				'sidebar-text': '#fff',
				'custom-text': '#000',
				'custom-text-hover': '#9CA3AF',
				'error-bg': '#fbe9e9',
			},
			scale: {
				flip: '-1',
			},
			minHeight: {
				'100vh': '100vh',
			},
		},
		screens: {
			xs: '375px',
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		maxWidth: {
			...[...Array(1201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			xs: '375px',
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			none: 'none',
		},
		minWidth: {
			...[...Array(1201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			xs: '375px',
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			none: 'none',
		},
		borderRadius: {
			...[...Array(32)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			'100vh': '100vh',
		},
		fontSize: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}vw`] = `${i}vw`
				return m
			}, {}),
		},
		padding: {
			...[...Array(301)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			...[...Array(5)].reduce((m, _, i) => {
				m[`${i}em`] = `${i}em`
				return m
			}, {}),
		},
		margin: {
			...[...Array(301)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(301)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			auto: 'auto',
		},
		width: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			fit: 'fit-content',
		},
		height: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			fit: 'fit-content',
		},
		lineHeight: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			'1em': '1em',
		},
		zIndex: {
			...[...Array(101)].reduce((m, _, i) => {
				m[i] = `${i}`
				return m
			}, {}),
			'minus-1': '-1',
			auto: 'auto',
		},
		translate: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(1001)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`minus-${i}p`] = `-${i}%`
				return m
			}, {}),
		},
		inset: {
			...[...Array(1001)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(1001)].reduce((m, _, i) => {
				m[`minus-${i}`] = `-${i}px`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`${i}p`] = `${i}%`
				return m
			}, {}),
			...[...Array(101)].reduce((m, _, i) => {
				m[`minus-${i}p`] = `-${i}%`
				return m
			}, {}),
			auto: 'auto',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
