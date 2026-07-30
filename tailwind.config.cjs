/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**.{js,ts,jsx,tsx}","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue' : '#2e74b7',
        'dark-blue' : '#181d2a',
      },
      keyframes:{
        textChange:{
          '0%,100%':{opacity : 0},
          '50%':{opacity:1}
        }
      },
      animation:{
        textChange:'textChange linear infinite'
      }

    },
  },
  plugins: [],
};
