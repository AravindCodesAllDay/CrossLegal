import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-150%)" },
        },
        slidefast: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-700%)" },
        },
      },
      animation: {
        "slide-left": "slide 50s linear infinite",
        "slide-left-fast": "slidefast 50s linear infinite",
        "slide-right": "slide 50s linear infinite reverse",
        "slide-right-fast": "slidefast 50s linear infinite reverse",
      },
      colors: {
        primary: "#181a22",
        secondary: "#b9967e",
      },
      fontFamily: {
        marcellus: ["Marcellus", "serif"],
      },
      backgroundImage: {
        statue: "url('/app/_assets/statue.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
