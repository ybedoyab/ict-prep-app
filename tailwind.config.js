/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        huawei: {
          50: '#fcf3f3',
          100: '#fae3e3',
          200: '#f6cdcd',
          300: '#f0adae',
          400: '#e57e80',
          500: '#d7585a',
          600: '#c23e40',
          700: '#a32d2f',
          800: '#88292a',
          900: '#712628',
          950: '#3d1011',
          red: '#c8102E' // Official Huawei Red
        }
      }
    },
  },
  plugins: [],
}
