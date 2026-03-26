import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'school-red':       '#760504',
        'school-red-light': '#c0392b',
        'school-red-hover': '#e74c3c',
        'school-yellow':    '#fbdc6a',
        'school-yellow-d':  '#f4c842',
        'school-dark':      '#090a0e',
        'school-bg':        '#0a0a0f',
        'school-surface':   '#111118',
        'school-border':    '#1e1e2e',
        'school-text':      '#f0f0f5',
        'school-muted':     '#8b8ba0',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)',
        glow: '0 0 20px rgba(192,57,43,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
