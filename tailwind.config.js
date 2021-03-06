module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			colors: {
				bgPurpleLight: '#4B47D0',
				bgPurpleStrong: '#232295',
				bgGrayLigth: '#ECF1FD',
				bgGrayStrong: '#A5B2D2',
				bgPurpleMid: '#8D7AAA',
				bgBlue: '#070A35'
			},
			Keyframes: {
				down: {
					'0%, 100%': { transform: 'rotate(-3deg)' }
				}
			},
			animation: {
				down: 'down 4s linear infinite'
			}
		}
	},
	plugins: []
};
