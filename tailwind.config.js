/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './site/index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef0f8',
          100: '#dce0f5',
          400: '#636791',
          500: '#d03030',
          600: '#b82828',
          700: '#8b1f1f',
        },
        navy: {
          500: '#3d4a8f',
          600: '#252d6b',
          700: '#1e2560',
          800: '#1a2248',
          900: '#141b3d',
        },
        dark: {
          900: '#1a2248',
          800: '#252d6b',
          700: '#3d4a8f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
