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
        // Rariko Brand Colors
        usdt: "#1DBF73", // Primary USDT Green
        "usdt-dark": "#10B981", // Darker green for hover states
        "usdt-light": "#34D399", // Lighter green for highlights
        // Semantic Colors
        success: "#10B981",
        error: "#EF4444",
        // Gray Scale
        "gray-800": "#1F2937",
        "gray-700": "#374151",
        "gray-400": "#9CA3AF",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'orbitron': ['var(--font-orbitron)'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #111827, #1F2937, #000000)',
        'gradient-card': 'rgba(31, 41, 55, 0.5)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px) scale(0.9)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        'slide-up-delayed': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px) scale(0.9)' 
          },
          '50%': { 
            opacity: '0', 
            transform: 'translateY(25px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'fade-in-up-delayed': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '60%': { 
            opacity: '0', 
            transform: 'translateY(15px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-x': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
        'underline': {
          '0%': { 
            transform: 'scaleX(0)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scaleX(0.5)',
            opacity: '0.5'
          },
          '100%': { 
            transform: 'scaleX(1)',
            opacity: '1'
          },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 1s ease-out',
        'slide-up-delayed': 'slide-up-delayed 1.2s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out 0.3s both',
        'fade-in-up-delayed': 'fade-in-up-delayed 1s ease-out 0.6s both',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 3s ease-in-out infinite 0.5s',
        'gradient-x': 'gradient-x 4s ease-in-out infinite',
        'underline': 'underline 1.5s ease-out 0.8s both',
      }
    },
  },
  plugins: [],
} satisfies Config;
