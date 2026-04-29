import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slop: {
          ink: "#0a0604",         // deepest black-bronze
          bronze: "#1a0f06",      // dark bronze panel
          forge: "#2d1908",       // forge brown
          ember: "#ff6a00",       // fire orange
          gold: "#ffc73a",        // bright sword-gold
          copper: "#d4881f",      // copper accent
          crimson: "#b91d1d",     // dragon-eye red
          cream: "#fbe8b5",       // parchment text
          rust: "#7a3a12",        // rust border
          ash: "#3a2a1a",         // ash grey-brown
        },
      },
      fontFamily: {
        bangers: ["var(--font-bangers)", "Impact", "sans-serif"],
        marker: ["var(--font-marker)", "Comic Sans MS", "cursive"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      rotate: {
        "1.5": "1.5deg",
        "2.5": "2.5deg",
        "3.5": "3.5deg",
      },
      animation: {
        "wobble": "wobble 6s ease-in-out infinite",
        "drip": "drip 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ember-flicker": "ember-flicker 2s ease-in-out infinite",
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
        "ember-flicker": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px #ff6a00)" },
          "50%": { opacity: "0.85", filter: "drop-shadow(0 0 14px #ffc73a)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
