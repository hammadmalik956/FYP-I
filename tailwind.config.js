/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      'smal': '0.813rem',
      'xl': '1.5rem',
      '3xl':'2rem',
      '4xl':'2.6rem'
    },
    extend: {
      backgroundImage:{
        'hero':"url('./img/bg-Lp.png')"
      },
      spacing:{
        18: "4.5rem",
      },
      colors:{
        blue: {
          600 : '#3209eb',
          50 :'#f6f0ed',
          20: '#0079c0'
        },
        purple:{
          50: "#353b3c"
        },
        onyx: {
          50 : "#0f1a20",
          100: "#102121"
        },


      }
    },
  },
  plugins: [],
}