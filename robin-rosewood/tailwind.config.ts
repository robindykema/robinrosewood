import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'serif': 'Lora, seif',
    },
    extend: {
      letterSpacing: {
        tightest: '-0.035em',
      },
      colors: {
        'robin-yellow': '#FFC857',
        'hero-navy': '#1F2041',
      },
      fontSize: {
        'hero-headline': '6rem'
      },
      lineHeight: {
        'hero-headline': '4.5rem'
      }
    },
    container: {
      center: true,
      padding: '2rem',

    },
    'container-full': {
      width: '100%',
      margin: '0 auto',
    }
  },
  plugins: [],
}
export default config
