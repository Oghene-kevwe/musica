
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#A4C7C6',
        'secondary': ' #FACD66',
        'dark': ' #1D2123',
        'darkAlt': ' #1A1E1F',
        'light': '#EFEEE0',
      }
    },
  },
  plugins: [],
}