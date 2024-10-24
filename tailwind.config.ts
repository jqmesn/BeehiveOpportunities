import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				'3xl': '0px 10px 20px 5px rgba(0, 0, 0, 0.24)',
			  }
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
