/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-gray': '#1c1f24',
        'dark-blue-gray': '#15171c',
        'light-gray': '#393E46',
        'gray1': '#444444'
      },
      boxShadow: {
        'custom-boxshadow': '6px 6px 4px rgba(0, 0, 0, 0.16)',
        'button-shadow': '0px 0px 30px 20px rgba(0, 0, 0, 5)'
      },
    },
  },
  plugins: [],
}


