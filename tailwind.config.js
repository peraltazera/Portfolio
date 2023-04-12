const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        darkSec: "#171717",
        light: "#f5f5f5",
        primary: "#A78BFF", // 240,86,199
        secundary: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularDark: 'repeating-radial-gradient(rgba(0,0,0,0.1) 2px, #1b1b1b 32px, #1b1b1b 100px)',
        circularDarkLg: "repeating-radial-gradient(rgba(0,0,0,0.1) 2px,#1b1b1b 32px,#1b1b1b 80px)",
        circularDarkMd:"repeating-radial-gradient(rgba(0,0,0,0.1) 2px,#1b1b1b 32px,#1b1b1b 60px)",
        circularDarkSm: "repeating-radial-gradient(rgba(0,0,0,0.1) 2px,#1b1b1b 32px,#1b1b1b 10px)",
        project: "url('/public/images/projects/OpenChat.png')",
      },
      dropShadow: {
        primary: [
          "0 0px 16px rgba(167,139, 255, 0.4)",
        ],
        dark: [
          "0 0px 16px rgba(0,0, 0, 0.6)",
        ],
      },
    },
  },
  plugins: [],
}

