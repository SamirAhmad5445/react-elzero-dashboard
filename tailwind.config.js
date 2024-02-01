/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0075ff",
        "primary-alt": "#0d69d5",
        neutral: "#888888",
        "neutral-alt": "#eeeeee",
        warning: "#f59e0b",
        success: "#22c55e",
        danger: "#f44336",
        powder: "#f1f5f9",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
