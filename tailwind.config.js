/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      colors:{
        instagram:{
          light:'#feda75',
          pink:'#d62976',
          purple:'#962fbf',
          blue:'#4f5bd5',
          dark:'2a2a72',
        },
      },
    },
  },
  plugins: [],
}