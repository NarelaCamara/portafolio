import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-slide-in": "myAnim1 1s ease-in-out",
        "fade-slide-out": "myAnim2 1s ease-in-out",
        "focus-in-contract": "focus-in-contract 1s linear",
      },
      keyframes: {
        myAnim1: {
          "0%": { opacity: "0", transform: "translateY(0px)" },
          "100%": { opacity: "1", transform: "translateY(-50)" },
        },
        myAnim2: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-50px)" },
        },
        "focus-in-contract": {
          "0%": {
            letterSpacing: "1em",
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
