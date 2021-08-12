const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        red: {
          '50': '#fdf2f2',
          '100': '#fde8e8',
          '200': '#fbd5d5',
          '300': '#f8b4b4',
          '400': '#f98080',
          '500': '#f05252',
          '600': '#e02424',
          '700': '#c81e1e',
          '800': '#9b1c1c',
          '900': '#771d1d',
        },
      }
    },
  },
})
