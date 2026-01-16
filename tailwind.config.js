/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        'bibliotheque': {
          blue: '#1e40af',
          lightblue: '#3b82f6',
          gray: '#6b7280',
          lightgray: '#f3f4f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}