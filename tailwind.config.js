/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        notoSansKr: ['var(--font-notoSansKr)'],
      },
      backgroundImage: {
        'poker-background': "url('/poker-background.png')",
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
};
