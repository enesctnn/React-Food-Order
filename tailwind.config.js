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
      keyframes: {
        'fade-slide-up': {
          from: { opacity: '0', transform: 'translateY(4rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
