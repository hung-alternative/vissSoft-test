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
        "viss-header": "8px -8px 4px 0px rgba(0, 0, 0, 0.25) inset",
        "viss-btn": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "viss-gradient":
          "conic-gradient(from var(--viss-deg, 41deg) at 15.95% 85.6%, #0050E5 0deg, #003BAA 360deg)",
        "viss-gradient-btn":
          "conic-gradient(from 200deg at 73.17% 16.67%, #0050E5 0deg, #003BAA 360deg)",
      },
      textShadow: {
        viss: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        none: "none",
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
