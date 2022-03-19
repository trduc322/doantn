const colors = require('tailwindcss/colors')
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx}", "./src/*.html"],
    darkMode: false, 
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          cyan: colors.cyan,
        },
      },
    },
    variants: {
      extend: {
  
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };