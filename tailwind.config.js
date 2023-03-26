/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--lato)'],
      },
    },
  },
  plugins: [require('daisyui')],
};
