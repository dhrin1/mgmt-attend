/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#0FAD51",
          secondary: "#DBFCE7",
        },
        brown: {
          primary: "#333333",
        },
      },
    },
  },
  plugins: [],
};
