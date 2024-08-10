import type { Config } from "tailwindcss";
// import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181a22",
        secondary: "#b9967e",
      },
      backgroundImage: {},
      fontFamily: {
        marcellus: ['Marcellus SC', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
