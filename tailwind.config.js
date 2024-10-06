/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./views/*.ejs"],
  theme: {
    extend: {
      colors: {
        'primary': '#776E87',
        'secondary': '#4D4861',
        'success': '#4D4861',
        'danger': '#E00049',
        'safe': '#5CDE51',
        'alter': '#C251DE'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

