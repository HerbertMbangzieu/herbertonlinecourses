/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':{
          'primary':'',
          'primary':'',
          'light':'',
          'dark':'',
        },
        'red':{
          'primary':'#b91c1c',
          'secondary':'#dc2626',
          'light':'#fca5a5',
          'dark':'#7f1d1d',
        },
        'blue':{
          'primary':'',
          'primary':'',
          'light':'',
          'dark':'',
        },
      }
    },
  },
  plugins: [],
}