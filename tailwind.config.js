/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        primary: '#292F36',
        secondary: '#CDA274',
        'bg-item': '#F4F0EC'

      }
    },
  },
  plugins: [],
}