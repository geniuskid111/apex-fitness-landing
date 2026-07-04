import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0A0B',
          surface: '#18181B',
          border: '#3F3F46',
        },
        ink: {
          DEFAULT: '#FAFAFA',
          muted: '#A1A1AA',
        },
        volt: {
          DEFAULT: '#D7FF3E',
          hover: '#C2E82E',
        },
        success: '#22C55E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
}

export default config
