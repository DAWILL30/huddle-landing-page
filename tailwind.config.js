/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryPaleCyan: "hsl(193, 100%, 96%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        desktop: "url('../images/bg-hero-desktop.svg')",
        mobile: "url('../images/bg-hero-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
