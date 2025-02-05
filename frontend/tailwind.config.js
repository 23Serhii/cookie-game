module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'cookies-background': "url('./public/background.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
