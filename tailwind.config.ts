import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary
        Pink: 'hsl(322, 100%, 66%)',
        LightPink:'hsl(321, 100%, 78%)',
        LightRed:'hsl(0, 100%, 63%)',
        // neutral
        VeryDarkCyan:'hsl(192, 100%, 9%)',
        VeryPaleBlue:'hsl(207, 100%, 98%)',
        current: 'currentColor',
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'openSans': ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
