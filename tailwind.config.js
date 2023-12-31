/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        self: ["serif"],
      },
      height: { svh: "100svh" },
      minHeight: { svh: "100svh" },
      colors: {
        primary: "#0098C6",
        secondary: "#5EB9D7",
      },
    },
  },
  plugins: [],
};
