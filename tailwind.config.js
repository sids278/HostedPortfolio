/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#4F46E5',
        dark: {
          100: '#1F2937',
          200: '#111827',
          300: '#0F172A',
        }
      }
    },
  },
  plugins: [],
};