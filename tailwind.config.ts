import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Modern XChainJS Brand Colors
        'chain-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dfff',
          300: '#7cc4ff',
          400: '#39a6ff',
          500: '#0d87ff',
          600: '#006adb',
          700: '#0054b3',
          800: '#00478a',
          900: '#0a3d72',
          950: '#07274b',
        },
        'electric-green': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        'cyber-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Dark theme colors
        'dark': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      textColor: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#334155',
          lighter: '#64748b'
        },
        accent: '#0d87ff',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        'on-dark': '#f8fafc'
      },
      backgroundColor: {
        primary: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
          light: '#f8fafc'
        },
        accent: '#0d87ff',
        success: '#10b981',
        'gradient-start': '#0d87ff',
        'gradient-end': '#10b981'
      },
      borderColor: {
        primary: {
          DEFAULT: '#e2e8f0',
          light: '#f1f5f9',
          dark: '#334155'
        },
        accent: '#0d87ff'
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'chain-link': 'chain-link 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0d87ff, 0 0 10px #0d87ff, 0 0 15px #0d87ff' },
          '100%': { boxShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981' },
        },
        'chain-link': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0d87ff 0%, #10b981 100%)',
        'hero-pattern': 'radial-gradient(circle at 1px 1px, rgba(13, 135, 255, 0.1) 1px, transparent 0)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(13, 135, 255, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'neo': '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.5)',
      }
    }
  },
  plugins: []
}
export default config
