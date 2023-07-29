/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
      extend: {
        colors: {
          "theme-text-color": "var(--bubble-ai-theme-text-color)",
        },
        screens: {
         
        },
      },
    },
    plugins: [],
  };
  