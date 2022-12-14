/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#549D66",
        bgColor: "#55DF77",
        boxColor: "rgba(255, 255, 255, 0.05)",
        btnColor: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        pattern: "url(./assets/bgline.svg)",
      },
    },
  },
  plugins: [],
};
