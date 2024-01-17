/** @type {import('tailwindcss').Config} */
import config from "./utils/config";

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    // "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: config.colors,
    },
  },
  plugins: [],
};
