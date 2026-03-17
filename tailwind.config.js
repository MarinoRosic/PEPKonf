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
        'logo-motion': 'logoMotion 16s ease-in-out infinite',   // ← new combined name
        shine: 'shine 10s linear infinite',
      },
      keyframes: {
        logoMotion: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%':      { transform: 'scale(1.025) translate(6px, -12px)' },
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

