module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['group-hover', 'group-focus'],
      translate: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
