module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      'main-noto': ['Noto Sans TC', 'sans-serif'],
      'secondary-roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      color: {
        'main-blue': {
          100: '#F9FBFF',
          200: '#E7EEFA',
          300: '#3064B9',
        },
        'secondary-gary': {
          100: '#FAFAFA',
          200: '#E5E5E5',
          300: '#C4C4C4',
          400: '#A5A5A5',
          500: '#868686',
        },
        'secondary-red': '#D95140',
        'secondary-blue': '#1877F2',
        'base-back-gray': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
