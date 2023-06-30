module.exports = {
  // Check components from @anhgelus/ui and from @anhgelus/projects
  content: ['./node_modules/@anhgelus/**/*.{svelte,js,ts}', './src/**/*.{svelte,js,ts}'],
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  themes: ["light", "dark"],
};