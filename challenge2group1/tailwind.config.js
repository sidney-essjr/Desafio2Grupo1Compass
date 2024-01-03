/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gelo: "#F0F1EE",
      abacate: "#8A9B6E",
      lunar: "#354733",
      white: "#ffffff",
      accent: "#DDDEA0",
      linegray: "#AFB2AA",
      textgray: "#808276",
      errorred: "#e20000",
      verdinho: "#83E281",
    },
    fontFamily: {
      raleway: ['"Raleway"'],
      garamond: ['"EB Garamond"'],
      lato: ['"Lato"'],
      inter: ['"Inter"'],
      pacifico: ['"Pacifico"'],
    },
    screens: {
      md: "767px",
    },

    borderRadius: {
      borderFull: "50%",
    },
    
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
