/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",        // Darker background color
        secondary: "#F9F7F8",      // Text color
        tertiary: "#000000",       // Slightly lighter background color
        "black-100": "#1c1c1c",    // Even darker background color
        "black-200": "#111111",    // Darkest background color
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #111111",  // Darker shadow for cards
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
