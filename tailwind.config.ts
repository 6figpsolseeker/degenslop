import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slop: {
          bg: "#0d0a08",
          panel: "#1a1410",
          border: "#2b1f17",
          accent: "#a3ff12",   // slime green
          danger: "#ff2d6f",   // hot pink rug
          warn: "#ffd029",     // dirty yellow
          aqua: "#21d4fd",     // electric blue
          puke: "#9eff00",     // toxic green-yellow
          stamp: "#ff3b3b",    // stamp red
          muted: "#7c6f63",
          tape: "#f9e07f",     // washi tape yellow
        },
      },
      fontFamily: {
        // user-facing: meme stack
        bangers: ["var(--font-bangers)", "Impact", "sans-serif"],
        marker: ["var(--font-marker)", "Comic Sans MS", "cursive"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      rotate: {
        "1.5": "1.5deg",
        "2.5": "2.5deg",
        "3.5": "3.5deg",
        "neg-1.5": "-1.5deg",
        "neg-2.5": "-2.5deg",
        "neg-3.5": "-3.5deg",
      },
      animation: {
        "wobble": "wobble 6s ease-in-out infinite",
        "drip": "drip 3s ease-in-out infinite",
        "stamp-spin": "stamp-spin 12s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shake": "shake 0.4s ease-in-out infinite",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        drip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        "stamp-spin": {
          "0%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(-8deg)" },
          "100%": { transform: "rotate(-12deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
