/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        sm: "530px",
      },

      borderRadius: {
        borderFull: "50%",
      },

      boxShadow: {
        strongShadow: "0 25px 16px -13px rgb(0 0 0 / 0.30)",
      },

      backgroundImage: {
        "register-image": "url(src/assets/register-image.svg)",
        "footer-image": "url(footerBG.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
