/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'tp-white': '#ffffff5a',
      'tp-gray': '#afafaf5a',
      slate: 'rgb(100 116 139)',
      gray: 'rgb(17 24 39)',
      'gray-1': 'rgb(107 114 128)',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    extend: {}
  },
  plugins: []
}
