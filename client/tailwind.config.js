/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        blue: {
          600: "#3b82f6",
        },
        indigo: {
          600: "#4f46e5",
        },
        yellow: {
          300: "#fbbf24",
          400: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
