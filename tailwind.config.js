/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        trispace: ["Trispace", "sans-serif"],
      },
      colors: {
        primary: "#0057FF",
        secondary: "#018052",
        tertiary: "#F0F6FF",
        grey: "#FAFAFA",
        ash: "#D9D9D9",
        "f-primary": "#272727",
        "f-secondary": "#979797",
      },
    },
  },
  plugins: [],
};
