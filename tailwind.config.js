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
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 7%': {
            transform: 'rotateZ(0)'
          },
          '15%': {
            transform: 'rotateZ(-15deg)'
          },
          '20%': {
            transform: 'rotateZ(10deg)'
          },
          '25%':{
            transform: 'rotateZ(-10deg)'
          },
          '30%': {
            transform: 'rotateZ(6deg)'
          },
          '35%': {
            transform: 'rotateZ(-4deg)'
          },
          '40%, 100%': {
            transform: 'rotateZ(0)'
          }
        }
       },
       animation: {
        wiggle: 'wiggle 2s linear infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
