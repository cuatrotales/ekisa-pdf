/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  corePlugins: {
    preflight: false,
  },
};
