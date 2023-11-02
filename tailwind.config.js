/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        maxContent: "1160px",
        maxContentTab: "650px"
      },
      fontFamily: {
        "mont": ['Montserrat', 'sans-serif'],
        "robo": ['Roboto', 'sans-serif'],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        richgray: {
          800: "#2B2A2A",
          700: "#2B2A2A",
        },
        richblue: "#699BF7",
        secondary: {
          50: "#FFFFFF",

        }
      }
    },
  },
  plugins: [],
}

