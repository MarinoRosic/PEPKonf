/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'lalezar' : ['lalezar','serif']
    },
    extend: {
      backgroundImage:{
        'about-BG': "url('./assets/images/aboutPEP2.jpg')",
        'about-Mobitel': "url('./assets/images/aboutPEP2mobitel.png')",
        'stolice-BG' : "url('./assets/images/stoliceBG.jpg')",
        'stolice-BG-Mob' : "url('./assets/images/stoliceBG-Mobitel.png')"
      }
    }
  },
  plugins: [],
}

