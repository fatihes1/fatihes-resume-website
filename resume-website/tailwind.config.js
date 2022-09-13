/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand_background: "#F8FCFF",
        brand_orange: "#FDAF01",
        brand_blue: "#A7E1F5",
        brand_green_soft: "#70D096",
        brand_red: "#FB4F6E",
        brand_green: "#FB4F6E",
      },
    },
  },
  plugins: [],
};
