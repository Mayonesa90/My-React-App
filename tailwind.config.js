/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.falling-down': {
          transform: 'translateY(-500px)',
        },
        '.font-fromage': {
          'font-family': 'Fromages',
        },
      }

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover']
      })
    })
  ],
}



// Syntax för att lägga till egen class:
//
// plugin(function({ addUtilities }) {
//   const newUtilities = {
//     '.skew-10deg': {
//       transform: 'skewY(-10deg)',
//     },
//     '.skew-15deg': {
//       transform: 'skewY(-15deg)',
//     },
//   }

//   addUtilities(newUtilities, {
//     variants: ['responsive', 'hover']
//   })
// })