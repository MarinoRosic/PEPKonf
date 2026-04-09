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

