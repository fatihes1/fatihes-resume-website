/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const _ = require("lodash");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand_background: "#F8FCFF",
        brand_orange: "#FDAF01",
        brand_blue: "#A7E1F5",
        brand_green_soft: "#70D096",
        brand_red: "#FB4F6E",
        brand_green: "#008D43",
        brand_blue2: "#A5E1F9",
        brand_red2: "#EE5B6E",
        dark_background: "#252525",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const calcUtilities = _.map(theme("spacing"), (value, key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`,
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - ${value})`,
          },
        };
      });
      addUtilities(calcUtilities, {
        variants: ["responsive", "hover"],
      });
    }),
    require("daisyui"),
    require("tw-elements/dist/plugin"),
  ],
};
