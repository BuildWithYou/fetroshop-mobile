/** @type {import('tailwindcss').Config} */
import config from "./constants/config";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors: config.colors },
  },
  plugins: [],
};
