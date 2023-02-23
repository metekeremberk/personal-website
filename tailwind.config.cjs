const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "backgroundPrimary": "#020826",
        "backgroundPrimaryLight": "#2f4f76",
        "backgroundSecondary": "#7d6f5e",
        "backgroundSecondaryLight": "#cebeab",

        "accentPrimary": "#e6d8c2",
        "accentSecondary": "#ebdfd2",
        "accentTertiary": "#ffffff",

        "textPrimary": "#ffffff",
        "textSecondary": "#2f4f76",
      },
    },
  },

  plugins: [],
};

module.exports = config;
