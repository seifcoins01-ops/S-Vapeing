import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        dark: '#0f172a',
        light: '#f8fafc'
      },
      animation: {
        'vapor-float': 'vaporFloat 10s ease-in-out infinite',
        'smoke-effect': 'smokeEffect 10s ease-in-out'
      },
      keyframes: {
        vaporFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.9' }
        },
        smokeEffect: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' }
        }
      }
    },
  },
  plugins: [],
}
export default config