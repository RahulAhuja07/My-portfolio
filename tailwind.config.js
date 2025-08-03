/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'fade-in-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-in-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-in-4': 'fade-in 0.7s ease-out 0.8s forwards',
        'fade-in-5': 'fade-in 0.7s ease-out 1.0s forwards',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};