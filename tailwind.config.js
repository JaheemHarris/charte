/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0075EA',
        accent: '#93c5fd',
        perso: '#4ade80',
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
        'sm': '0.875rem',
        'base': '1rem',
        'lg' : '1.125rem',
        'xl' : '1.25rem',
        '2xl' : '1.5rem',
        '3xl' : '1.875rem',
        '4xl' : '2.25rem',
        '5xl' : '3rem',
        '6xl' : '3.75rem',
        '7xl' : '4.5rem',
        '8xl' : '6rem',
        '9xl' : '8rem',
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
