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
        'stolice-BG' : "url('./assets/images/PEP-naslovna.jpg')",
        'stolice-BG-Mob' : "url('./assets/images/PEP-naslovna-mob.jpg')"
      },
      animation: {
        'gentle-breathe': 'gentleBreathe 14s ease-in-out infinite',
        float: 'float 18s ease-in-out infinite',
        shine: 'shine 10s linear infinite',
      },
      keyframes: {
        gentleBreathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(6px, -12px)' },
        },
        shine: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
      },
    }
  },
  plugins: [],
}

