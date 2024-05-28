/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        janda: "#a855f7",
        hideng: "#0f172a",
        bodas: "#f1f5f9",
        abu: "#64748b",
        hejo: "#22c55e",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
