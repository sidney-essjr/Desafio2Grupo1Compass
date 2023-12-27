/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      gelo: "#F0F1EE",
      abacate: "#8A9B6E",
      lunar: "#354733",
      white: "#ffffff",
      accent: "#DDDEA0",
      linegray: "#AFB2AA"
    },
    fontFamily: {
      raleway: ['"Raleway"'],
      garamond: ['"EB Garamond"'],
      lato: ['"Lato"'],
      inter: ['"Inter"']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  
};
