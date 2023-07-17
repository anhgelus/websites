module.exports = {
  // Check components from @anhgelus/ui and from @anhgelus/projects
  content: ['./node_modules/@anhgelus/**/*.{svelte,js,ts}', './src/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  themes: ["light", "dark"],
  theme: {
    extend: {
      minHeight: {
        '80': '80vh',
        '75': '75vh',
        '66': '66vh',
        '2': '2vh',
        '1': '1vh',
      },
      margin: {
        '4/10': '40%',
        '3/10': '30%',
      }
    }
  }
};