/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '580px',
        'm':'1300px',
      },
      colors:
      {
        "lightblue":"#bfdbfe",
        "mainblue":"#93c5fd",
        "black": '#09090c',
                "darkGray": '#121212',
                
                "brightRed": 'hsl(12, 88%, 59%)',
                "brightRedLight": 'hsl(12, 88%, 69%)',
                "brightRedSupLight": 'hsl(12, 88%, 95%)',

                "darkBlue": 'hsl(228, 39%, 23%)',
                "darkGrayishBlue": 'hsl(227, 12%, 61%)',
                "veryDarkBlue": 'hsl(233, 12%, 13%)',
        "gray":"#c7d0da"
      }
    },
  },
  plugins: [],
}