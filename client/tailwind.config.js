/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				Pink: '#E7BBE3',
				Bone: '#D2D0BA',
				Coffe: '#513C2C',
				Celtic: '#276FBF',
				Eerie: '#222222'
			},
			spacing: {
				90: '40rem'
			}
		},
		plugins: []
	}
};
