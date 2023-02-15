/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      bebas:"'Bebas Neue', cursive",
      roboto: "'Roboto', sans-serif",
      oswald:"'Oswald', sans-serif",
      ubuntu:"'Ubuntu', sans-serif"
    },
    extend: {
      animation:{
  fadeIn:'fade 0.5s 1',
  fadeOut: 'fadeOut 0.5s 1'
      },

keyframes:{
  fade:{
    'from': {
      opacity: 0,
      transform: 'translate3d(0, -20%, 0)'
    },
    'to': {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }
  },

  fadeOut:{
    'from': {
      opacity: 1,
      transform: 'translate3d(0, -20%, 0)'
    },
    'to': {
      opacity: 0,
      transform: 'translate3d(0, 0, 0)'
    }
  }

}
    },
  },
  plugins: [],
}