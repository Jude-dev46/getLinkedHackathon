/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        600: "#D434FE",
        900: "#150E28",
      },
      white: "#fff",
      pink: "#FF26B9",
      pinkGra: "#903AFF",
      dark: "#0f172a",
    },
    backgroundImage: {
      "purple-left": `url("./src/assets/purple-left.png")`,
      "purple-right": `url("./src/assets/purple-right.png")`,
      "mobile-purple": `url("./src/assets/mobile-purple.png")`,
      "mobile-hero": `url("./src/assets/mobile-hero.png")`,
      "button-grad": `url("./src/assets/buttonGra.png")`,
      curve: "url('./src/assets/curve.png')",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        unicaone: ['Unica One', 'sans'],
        primary: ['Montserrat', 'sans'],
    },
    },
  },
  plugins: [],
};
