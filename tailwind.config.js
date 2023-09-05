/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':{
          'primary':'#166534',
          'secondary':'#16a34a',
          'light':'#4ade80',
          'dark':'#14532d',
        },
        
        'orange':{
          'primary':'#c2410c',
          'secondary':'#f97316',
          'light':'#fdba74',
          'dark':'#7c2d12',
        },

        'red':{
          'primary':'#b91c1c',
          'secondary':'#dc2626',
          'light':'#fca5a5',
          'dark':'#7f1d1d',
        },
        'blue':{
          'primary':'#1d4ed8',
          'secondary':'#3b82f6',
          'light':'#93c5fd',
          'dark':'#1e3a8a',
        },
        'gray':{
          'primary':'#6b7280',
          'secondary':'#9ca3af',
          'light':'#e5e7eb',
          'dark':'#374151',
        },
      }
    },
  },
  plugins: [],
}