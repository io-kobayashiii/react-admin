module.exports = {
	mode: 'jit',
	purge: ['./public/js/app.js', './resources/js/**/*.*', './resources/views/**/*.*'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'custom-blue': '#1e90ff',
				'custom-light-blue': '#87cefa',
				'custom-green': '#32cd32',
				'custom-yellow': '#ffd700',
				'custom-orange': '#ffa500',
				'custom-red': '#ff0000',
				'custom-pink': '#ffc0cb',
			},
			scale: {
				flip: '-1',
			},
		},
		screens: {
			xs: '375px',
			sm: '560px',
			md: '768px',
			lg: '1000px',
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
			sm: '560px',
			md: '768px',
			lg: '1000px',
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
			...[...Array(5)].reduce((m, _, i) => {
				m[`${i}em`] = `${i}em`
				return m
			}, {}),
		},
		margin: {
			...[...Array(201)].reduce((m, _, i) => {
				m[i] = `${i}px`
				return m
			}, {}),
			...[...Array(201)].reduce((m, _, i) => {
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
