/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          manrope: ["Manrope", "sans-serif"],
        },
      },
    },
    plugins: [require("daisyui")],
  };