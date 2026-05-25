import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./mock/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
          elevated: "var(--surface-elevated)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)"
        },
        status: {
          success: "var(--success)",
          warning: "var(--warning)",
          danger: "var(--danger)"
        },
        border: "var(--border)",
        hairline: "var(--hairline)"
      },
      borderRadius: {
        ui: "12px",
        panel: "16px",
        editorial: "18px"
      },
      boxShadow: {
        small: "0 1px 2px var(--shadow-small)",
        large: "0 18px 50px var(--shadow-large)",
        layer: "0 10px 30px var(--shadow-layer)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      transitionTimingFunction: {
        product: "cubic-bezier(0.2, 0, 0.16, 1)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
