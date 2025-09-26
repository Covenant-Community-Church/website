import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: '#F6F3EA',
        navy: '#28365D',
        brown: '#362E17',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        heading: ['var(--font-goldenbook)', 'serif'],
        body: ['var(--font-almarai)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '15px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brown'),
            '--tw-prose-headings': theme('colors.brown'),
            '--tw-prose-lead': theme('colors.brown'),
            '--tw-prose-links': theme('colors.navy'),
            '--tw-prose-bold': theme('colors.brown'),
            '--tw-prose-counters': theme('colors.navy'),
            '--tw-prose-bullets': theme('colors.navy'),
            '--tw-prose-hr': theme('colors.warm'),
            '--tw-prose-quotes': theme('colors.brown'),
            '--tw-prose-quote-borders': theme('colors.navy'),
            '--tw-prose-captions': theme('colors.brown'),
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.heading'),
            },
            a: {
              fontWeight: '600',
              textDecoration: 'none',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            img: {
              borderRadius: theme('borderRadius.2xl'),
            },

            p: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
          },
        },
      }),

    },
  },
  plugins: [
    typography,
  ],
}
export default config