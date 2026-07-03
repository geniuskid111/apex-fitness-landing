import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',

        foreground: 'var(--foreground)',
        muted: 'var(--muted)',

        cta: 'var(--cta)',
        'cta-hover': 'var(--cta-hover)',
        'cta-text': 'var(--cta-text)',

        accent: 'var(--accent)',
        success: 'var(--success)',
      },
    },
  },
}

export default config
