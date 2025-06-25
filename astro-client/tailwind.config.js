/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				float: 'float 6s ease-in-out infinite',
				glow: 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
					'100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			colors: {
				glass: {
					light: 'rgba(255, 255, 255, 0.1)',
					medium: 'rgba(255, 255, 255, 0.05)',
					dark: 'rgba(255, 255, 255, 0.02)',
				},
			},
		},
	},
	plugins: [],
};
