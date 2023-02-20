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

        "button": "#8c7851",
        "buttonText": "#fffffe",

        "illustrationBorder": "#020826",
        "illustrationMain": "#fffffe",
        "illustrationHighlight": "#8c7851",
        "illustrationSecondary": "#eaddcf",
        "illustrationTertiary": "#f25042",

        "navbarBackground": "#8c7851",
        "navbarText": "#fffffe",
        "navbarBackgroundSecondary": "#eaddcf",
        
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}
