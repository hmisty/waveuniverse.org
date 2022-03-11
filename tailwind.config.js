const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        cyan: colors.cyan,
        sky: colors.sky,
        teal: colors.teal
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
