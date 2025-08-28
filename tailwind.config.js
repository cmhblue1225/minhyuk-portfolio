/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'apple-dark': '#1d1d1f',
        'apple-light': '#f5f5f7',
        'apple-blue': '#007aff',
        'apple-gray-100': '#fafafa',
        'apple-gray-200': '#f0f0f0',
        'apple-gray-300': '#d2d2d7',
        'apple-gray-400': '#86868b',
        'apple-gray-500': '#6e6e73',
        'apple-gray-600': '#515154',
        'apple-gray-700': '#424245',
        'apple-gray-800': '#1d1d1f',
        'apple-gray-900': '#000000',
        // Blue theme colors
        'blue-50': '#f0f9ff',
        'blue-100': '#e0f2fe',
        'blue-200': '#bae6fd',
        'blue-300': '#7dd3fc',
        'blue-400': '#38bdf8',
        'blue-500': '#0ea5e9',
        'blue-600': '#0284c7',
        'blue-700': '#0369a1',
        'blue-800': '#075985',
        'blue-900': '#0c4a6e',
        'blue-950': '#082f49',
        // Primary blue variations
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        // Apple blue variations
        'apple-blue': {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#b9e3fd',
          300: '#7cceff',
          400: '#36b7ff',
          500: '#007aff',
          600: '#0066d6',
          700: '#0052ad',
          800: '#00468f',
          900: '#003876',
          950: '#002653'
        }
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 6s ease infinite',
        'pulse-blue': 'pulse-blue 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-blue': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #007aff, 0 0 10px #007aff, 0 0 15px #007aff' },
          '100%': { boxShadow: '0 0 10px #007aff, 0 0 20px #007aff, 0 0 30px #007aff' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        'apple': '20px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}