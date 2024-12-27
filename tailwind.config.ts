import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "viss-inset": "-8px 8px 4px 0px rgba(0, 0, 0, 0.25) inset",
        "viss-btn": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      // backgroundImage: {
      //   "viss-conic-text":
      //     "conic-gradient(from 41deg at 15.95% 85.6%, #0050E5 0deg, #003BAA 360deg)",
      // },
      textShadow: {
        viss: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
export default config;
