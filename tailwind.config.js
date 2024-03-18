/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Grid with wrapping for products cards
        cards: 'repeat(auto-fill, 16rem)',
      },
    },
  },
  plugins: [],
};
