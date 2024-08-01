/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent-white": "rgba(242, 244, 255, 0.75);",
        "primary": "#0CFF00",
        "onPrimary": "#000",
        "secondary": "#0E0E0E",
        "onSecondary": "white",
        "tertiary": "#515151",
        "admin-background": "#F4F4F46B",
        "admin-card": "#EAEAEA",
        "price": "#04D200"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
