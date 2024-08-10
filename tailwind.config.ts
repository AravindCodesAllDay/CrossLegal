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
      fontFamily: {
        marcellus: ['Marcellus SC', 'serif'],
      },
      backgroundImage: { statue: "url('/app/_assets/statue.jpg')" },
    },
  },
  plugins: [],
};
export default config;
