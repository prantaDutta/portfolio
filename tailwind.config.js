module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#EEFBFB',
          light: '#007CC7',
          DEFAULT: '#4DA8DA',
          dark: '#203647',
          darker: '#12232E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
