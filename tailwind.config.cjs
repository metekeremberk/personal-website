/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background": "#f9f4ef",
        "backgroundSecondary": "#eaddcf",
        "headline": "#020826",
        "paragraph": "#716040",

        "cardText": "#020826",

        "button": "#8c7851",
        "buttonText": "#fffffe",

        "illustrationBorder": "#020826",
        "illustrationMain": "#fffffe",
        "illustrationHighlight": "#8c7851",
        "illustrationSecondary": "#eaddcf",
        "illustrationTertiary": "#f25042",

        "homeBackground": "#020826",
        "homeText": "#fffffe",
        "homeBackgroundSecondary": "#eaddcf",
        "homeLink": "#716040",

      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}
