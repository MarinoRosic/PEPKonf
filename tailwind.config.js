/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'main' : ['Roboto','sans-serif']
    },
    extend: {
      backgroundImage:{
        'about-BG': "url('./assets/images/aboutPozadina.png')",
        'about-Mobitel': "url('./assets/images/aboutPozadinaMobitel.png')"
      }
    }
  },
  plugins: [],
}

