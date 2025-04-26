/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7A22',
          light: '#FF9A52',
          dark: '#E05E00',
        },
        secondary: {
          DEFAULT: '#53234F',
          light: '#6D3769',
          dark: '#3B1937',
        },
        tertiary: {
          DEFAULT: '#BAD7E9',
          light: '#D3E6F2',
          dark: '#94BDD7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
};