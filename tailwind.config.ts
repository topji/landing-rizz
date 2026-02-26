import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Lexa theme
        "lexa-cyan": "#3EC7F4",
        "lexa-mid": "#3A7BFF",
        "lexa-deep": "#1F4BFF",
        "lexa-accent": "#5FD3FF",
        "lexa-glow": "#6EE7FF",
        "lexa-bg": "#060B1A",
        "lexa-bg-mid": "#0B1230",
        "lexa-bg-soft": "#0F1A4D",
        "lexa-text": "#EAF2FF",
        "lexa-text-secondary": "#8FA8FF",
        "lexa-muted": "#5B6AA6",
        // Aliases so existing usdt/gray classes use Lexa
        usdt: "#3EC7F4",
        "usdt-dark": "#3A7BFF",
        "usdt-light": "#5FD3FF",
        "gray-800": "#0B1230",
        "gray-700": "#0F1A4D",
        "gray-400": "#5B6AA6",
        "gray-300": "#8FA8FF",
        "gray-500": "#5B6AA6",
        "gray-900": "#060B1A",
        // Semantic (kept for charts/feedback)
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)"],
        orbitron: ["var(--font-orbitron)"],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
      },
      backgroundImage: {
        "gradient-lexa":
          "linear-gradient(135deg, #3EC7F4 0%, #3A7BFF 50%, #1F4BFF 100%)",
        "gradient-lexa-soft":
          "linear-gradient(135deg, #060B1A 0%, #0B1230 50%, #0F1A4D 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #3EC7F4 0%, #3A7BFF 50%, #1F4BFF 100%)",
        "gradient-card": "rgba(58, 123, 255, 0.08)",
      },
      boxShadow: {
        "lexa-glow": "0 0 20px rgba(110, 231, 255, 0.4)",
        "lexa-glow-sm": "0 0 12px rgba(95, 211, 255, 0.3)",
      },
      borderColor: {
        "lexa-glass": "rgba(95, 211, 255, 0.25)",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.01)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "slide-up-delayed": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.9)",
          },
          "50%": {
            opacity: "0",
            transform: "translateY(25px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-delayed": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "60%": {
            opacity: "0",
            transform: "translateY(15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        underline: {
          "0%": {
            transform: "scaleX(0)",
            opacity: "0",
          },
          "50%": {
            transform: "scaleX(0.5)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 1s ease-out",
        "slide-up-delayed": "slide-up-delayed 1.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out 0.3s both",
        "fade-in-up-delayed": "fade-in-up-delayed 1s ease-out 0.6s both",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float-delayed 3s ease-in-out infinite 0.5s",
        "gradient-x": "gradient-x 4s ease-in-out infinite",
        underline: "underline 1.5s ease-out 0.8s both",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
