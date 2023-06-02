/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0075EA',
        secondary: '#023D74',
        error: '#F83546',
        success: '#20ad61',
        text: '#212529',
        neutral4: '#5d6873',
        neutral3: '#8494a4',
        neutral2: '#ced7df',
        neutral1: '#f2f4f8',
        'text-gray': {
          100: '#f2f4f8',
          // ...
          900: '#1a202c',
          },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '400': '400',
        '600': '600',
        '700': '700',
        '900': '900',
      },
      fontSize: {
        '3xl': '3.5rem',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '36': '36px',
      },
    },
  },
  variants: {},
  plugins: [],
};
