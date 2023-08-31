/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // The HEX codes below designate the colors for the entire website
        // Primary is the background color for the entire website
        primary: "#2d3133", 
        // Secondary is the color for the navbar and section text
        secondary: "#dacbb8",
        // Tertiary is the color for the project cards
        tertiary: "#0f0f0f",
        // "black-100" is the color for the contact card
        "black-100": "#0f0f0f",
        // "black-200" seems to not be a color for anything
        "black-200": "#ff0000",
        // white-100 is for the "about" and "Experience" subtext
        "white-100": "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};