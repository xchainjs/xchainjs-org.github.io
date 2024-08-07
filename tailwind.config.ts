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
      textColor: {
        primary: {
          DEFAULT: '#252525',
          light: '#4F4F4F',
          lighter: '#686868'
        },
        basic: '#252525',
        growth: '#51A991',
        enterprise: '#1BE7B0'
      },
      borderColor: {
        primary: {
          DEFAULT: '#252525',
          light: '#4F4F4F',
          lighter: '#686868'
        }
      },
      backgroundColor: {
        primary: {
          DEFAULT: '#252525',
          light: '#4F4F4F',
          lighter: '#686868'
        }
      }
    }
  },
  plugins: []
}
export default config
