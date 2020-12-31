const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      '300': '300px',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '70': '70%',
      '300': '300px',
    },
    zIndex: {
      'back': '-1',
    },
    fontFamily: {
      header: ['Rubik', 'sans-serif'],
      body: ['Karla', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      colors: {
        red: {
          primary: '#ff1716',
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
