/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'gray-100': '#d1d5db',
      'light-blue': '#2563eb',
      white: '#fff',
      red: '#f87171',
    },
    keyframes: {
      'slide-in-from-right': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-in-back-to-right': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      'slide-in-from-right': 'slide-in-from-right 0.3s ease-out forwards',
      'slide-in-back-to-right': 'slide-in-back-to-right 0.3 ease-out forwards',
    },
  },
  plugins: [],
}
