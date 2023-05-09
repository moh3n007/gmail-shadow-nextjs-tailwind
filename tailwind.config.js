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
    },
    colors: {
      gray: colors.slate,
      transparent: "transparent",
      white: "white",
      blue: {
        500: "#4299E1",
      },
    },
  },
  plugins: [],
};
