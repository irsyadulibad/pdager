export default {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#a41e02",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
