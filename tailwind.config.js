const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        widthAndOpacity: "width, opacity, margin, right",
      },
      boxShadow: {
        popup:
          "0 0px 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
    colors: {
      gray: colors.slate,
      transparent: "transparent",
      white: "white",
      blue: {
        500: "#4299E1",
      },
      red: {
        500: "#ef4444",
      },
    },
  },
  plugins: [],
};
