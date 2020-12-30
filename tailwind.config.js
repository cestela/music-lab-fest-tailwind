const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      header: ['Rubik', 'sans-serif'],
      body: ['Karla', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
