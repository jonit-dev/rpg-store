/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0D0B15',
          lighter: '#151320'
        },
        accent: {
          purple: '#7B3FE4',
          blue: '#4318FF'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(123, 63, 228, 0.15)',
        card: '0 4px 15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};