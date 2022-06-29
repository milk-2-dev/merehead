const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['ProximaNova', 'sans-serif'],
      body: ['ProximaNova', 'sans-serif'],
    },
    fontSize: {
      h1: ['40px', '40px'],
      h2: ['40px', '40px'],
      base: ['16px', '26px'],
    },
    colors: {
      primary: '#F4E041',
      secondary: '#00BDD3',
      yellow: {
        300: '#FFE302',
        400: '#F4E041',
      },
      'regal-blue': '#00BDD3',
      gray: {
        50: '#D0CFCF',
        150: '#7E7E7E',
        175: '#B4B4B4',
      },
      body: '#F8F8F8',
      white: '#ffffff',
      red: colors.red,
    },
    extend: {
      lineHeight: {
        6.2: '1.625rem',
      },
      margin: {
        13: '50px',
      },
      fontSize: {
        xxs: '.5rem',
        '4.5xl': '2.5rem',
        xs: '12px',
      },
      maxWidth: {
        'screen-xl': '1170px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'orange-theme': '#ff5722',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
        gray: {
          50: '#D0CFCF',
        },
      },
      borderRadius: {
        xlg: '10px',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-bg': "url('./assets/home-bg.jpg')",
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ['label-checked'], // you need add new variant to a property you want to extend
  //   },
  // },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`) // escape class
          const yourSelector = 'input[type="radio"]' // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}` // ~ - CSS selector for siblings
        })
      })
    }),
  ],
}
