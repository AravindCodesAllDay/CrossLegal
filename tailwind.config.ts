import type { Config } from "tailwindcss";

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
      backgroundImage: { statue: "url('/app/_assets/statue.jpg')" },
    },
  },
  plugins: [],
};
export default config;
