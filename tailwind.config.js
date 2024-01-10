/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        kabel: ["neue-kabel"],
        sans: ["source-han-sans-japanese", "sans-serif"],
        self: ["serif"],
      },
      height: { svh: "100svh" },
      minHeight: { svh: "100svh" },
      colors: {
        "primary-100": "#FFF5EA",
        "primary-400": "#EE7A00",
        "primary-500": "#E26400",
        "primary-900": "#664B18",
      },
    },
  },
  plugins: [],
};
