module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Monaco", "ui-monospace", "SFMono-Regular", "Menlo", "Roboto"],
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 7%": {
            transform: "rotateZ(0)",
          },
          "15%": {
            transform: "rotateZ(-11deg)",
          },
          "20%": {
            transform: "rotateZ(6deg)",
          },
          "25%": {
            transform: "rotateZ(-6deg)",
          },
          "30%": {
            transform: "rotateZ(2deg)",
          },
          "35%": {
            transform: "rotateZ(1deg)",
          },
          "40%, 100%": {
            transform: "rotateZ(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear",
      },
      colors: {
        seagreen: "#59BD96",
        forest: "#4CAD87",
        lightgreen: "#7CE5C2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
