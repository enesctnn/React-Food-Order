/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['"Raleway"', 'sans-serif'],
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [],
};
