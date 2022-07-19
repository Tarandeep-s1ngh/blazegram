/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5d23af",
        secondary: "#c569d6",
        accent: "#8047c5",
        bgmain: "#edf2f6",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
      heading: ["Poppins"],
      logo: ["Handlee"],
    },
  },
  plugins: [require("daisyui")],
};
