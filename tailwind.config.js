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
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      textColor: {
        // Text color for Card
        'card-color': '#569E67',
      },
      borderColor: {
        // Border color for Card
        'card-color': '#569E67',
      },
      backgroundColor: {
        // Background color for Card
        'card-color': '#569E67',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
