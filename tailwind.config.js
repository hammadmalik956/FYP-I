/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage:{
        'hero':"url('../public/assets/bg-Lp.png')"
      },
      spacing:{
        18: "4.5rem",
      },
      colors:{
        blue: {
          600 : '#3209eb',
          50 :'#f6f0ed',
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