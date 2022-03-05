module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      "2xl": "1440px",
    },
    colors: {
      "primary-cyan": "hsl(193, 38%, 86%)",
      "primary-green": "hsl(150, 100%, 66%)",
      "gray-blue": {
        DEFAULT: "hsl(217, 19%, 38%)",
        dark: "hsl(217, 19%, 24%)",
        darkest: "hsl(218, 23%, 16%)",
      },
    },
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      quote: "28px",
      "xs-quote": "18px",
      sm: "12px",
    },
  },
  plugins: [],
};
