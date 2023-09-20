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
      "purple-left": `url("./src/assets/images/purple-left.png")`,
      "purple-right": `url("./src/assets/images/purple-right.png")`,
      "mobile-purple": `url("./src/assets/images/mobile-purple.png")`,
      "mobile-hero": `url("./src/assets/images/mobile-hero.png")`,
      "button-grad": `url("./src/assets/images/buttonGra.png")`,
    },
    // spacing: {
    //   100: "500px",
    // },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
