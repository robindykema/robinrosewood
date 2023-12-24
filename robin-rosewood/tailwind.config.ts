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
        'hero-headline': '10rem'
      },
      lineHeight: {
        'hero-headline': '8.25rem'
      }
    },
    container: {

    },
  },
  plugins: [],
}
export default config
