/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif'],
        montez:['Montez', 'cursive']
      },
      colors:{
        primary:"#84BD00",
        backcol:["#D9D9D9"]
      }
    }
  },
  plugins: [],
}

