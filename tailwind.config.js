/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dae3ef',
          200: '#b8c9df',
          300: '#8baac9',
          400: '#5c87b0',
          500: '#3c6997',
          600: '#2d517b',
          700: '#233f61',
          800: '#15253b',
          900: '#0c1726',
          950: '#060c14',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef5d6',
          200: '#fde7a8',
          300: '#fcd370',
          400: '#fab938',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(12, 23, 38, 0.08)',
        'card': '0 10px 30px -4px rgba(12, 23, 38, 0.08)',
        'card-hover': '0 20px 40px -4px rgba(12, 23, 38, 0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
