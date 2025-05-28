/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCE4E5',
          100: '#F9C9CB',
          200: '#F29497',
          300: '#EB5E63',
          400: '#E42830',
          500: '#9B2226', // Main brand color (muted brick-red)
          600: '#7D1B1F',
          700: '#5F1518',
          800: '#410E10',
          900: '#230708',
        },
        secondary: {
          50: '#F5F7FA',
          100: '#EBEEF5',
          200: '#D8DEEB',
          300: '#C4CDE0',
          400: '#B0BDD6',
          500: '#9CACCC',
          600: '#7D8AA3',
          700: '#5E677A',
          800: '#3E4552',
          900: '#1F2229',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#D9D9D9',
          400: '#CCCCCC',
          500: '#BFBFBF',
          600: '#999999',
          700: '#737373',
          800: '#4D4D4D',
          900: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};