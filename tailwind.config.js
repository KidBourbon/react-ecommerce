/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Grid with wrapping for products cards
        cards: 'repeat(auto-fill, 18rem)',
      },
      width: {
        90: '22.5rem',
      },
      height: {
        // Height for aside menu
        aside: 'calc(100vh - 4.5rem)',
      },
      margin: {
        17.5: '4.375rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      textColor: {
        'card-color': '#569E67',
      },
      borderColor: {
        'card-color': '#569E67',
      },
      backgroundColor: {
        'card-color': '#569E67',
      },
    },
  },
  plugins: [],
};
